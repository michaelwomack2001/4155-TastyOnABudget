from main import *
from fastapi.testclient import TestClient
from main import app
import json

client = TestClient(app)

newUser = User(username = "testuser", password = "Testpass", email = "TestEmail", firstName = "TestFname")
if (len(session.query(User).filter(User.username == newUser.username).all())==0):
        session.add(newUser)
        session.commit()


def test_add_user():
    data = UserLoginData(username = "testuser1", password = "Testpass1", email = "TestEmail1", firstName = "TestFname1")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 200
    assert response.json() == {"detail": "Succ"}

         
def test_overlapping_password():
    data = UserLoginData(username = "testuser", password = "Testpass1", email = "TestEmail1", firstName = "TestFname1")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 400
    assert response.json() == {"detail": "double user"}

def test_putUserSurveyData():
    data = UserSurveyData(
    userID= 1,
    calorie_goal= "300",
    gender= "male",
    height= "3",
    weight= "230",
    age= "21",
    cooking_exp= "moderate",
    num_days= "1",
    num_meals= "3",
    activity_level= "moderate")
    response = client.put("/userSurveyData", json=data.__dict__)
    assert response.status_code == 200




