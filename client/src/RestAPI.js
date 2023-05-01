import axios from "axios";

let server_url = "http://localhost:7200/"

class restAPI {
    checkEnv() {
        const endpoint = ""
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint)
    }
    getToken(username,password) {
        const endpoint = "auth/login"
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password});
        let customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        return axios.post(restEndPoint,json,customConfig)
    }
    addUser(username,password,email,firstName){
        const endpoint = "addUser";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password,email:email,firstName:firstName});
        return axios.put(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getAllRecipes(){
        const endpoint = "recipes";
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }
    getNumRecipes(totalRecipes){
        const endpoint = "recipes/"+totalRecipes;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipesSearchTitle(searchParam){
        const endpoint = "recipes/searchtitle/"+searchParam;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipeByID(id){
        const endpoint = "recipes/"+id;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getRecipesSearchTags(searchParam){
        const endpoint = "recipes/searchtags/"+searchParam;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getCustomRecipies(username){
        const endpoint = "recipes/reccomended/"+username;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    putUserData(surveyData){
        const endpoint = "userSurveyData";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify(surveyData);

        return axios.put(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    putLikedRecipie(userId, recipieId){
        const endpoint = "like_recipie";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({userId:userId, recipieId:recipieId});
        return axios.put(restEndPoint,json,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    putDislikedRecipie(userId, recipieId){
        const endpoint = "dislike_recipie";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({userId:userId, recipieId:recipieId});

        return axios.put(restEndPoint,json,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

}

export default new restAPI();