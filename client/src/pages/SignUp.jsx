import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import RestAPI from '../RestAPI';

const SignUp = () => {
    
    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [pass2, setPass2] = React.useState("");
    const [userNameError, setUserNameError] = React.useState(false);
    const [passError, setPassError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);

    const handleClick = (e) => {
        if(userName||pass||pass2||email!==""){
            console.log(userName, pass);
            RestAPI.getToken(userName,pass).then((res)=>{
                sessionStorage.setItem("token",res.data['access_token'])
                console.log(sessionStorage.getItem("token"))
            })
        }
        else{
            setPassError(true);
            setUserNameError(true);
            setEmailError(true);
        }
        setPass("");
        setUserName("");
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleUsrNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handlePassChange2 = (e) => {
        setPass2(e.target.value);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>

            <TextField
                id="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError?"Enter a Email":""}
                onBlur = {()=>(email===""||email=== null?setEmailError(true):null)}

            />

            <TextField
                id="user-name"
                label="User Name"
                variant="outlined"
                margin="normal"
                value={userName}
                onChange={handleUsrNameChange}
                error={userNameError}
                helperText={userNameError?"Enter a username":""}
                onBlur = {()=>(userName===""||userName=== null?setUserNameError(true):null)}

            />

            <TextField
                id="password"
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={pass}
                onChange={handlePassChange}
                error={passError}
                helperText={passError?"Enter a password":""}
                onBlur = {()=>(userName===""||userName=== null?setPassError(true):null)}
            />

            <TextField
                id="password2"
                label="Re-type password"
                variant="outlined"
                margin="normal"
                type="password"
                value={pass2}
                onChange={handlePassChange2}
                error={passError}
                helperText={passError?"Enter a password":""}
                onBlur = {()=>(userName===""||userName=== null?setPassError(true):null)}
            />

            <Button variant="contained" onClick={handleClick} style={{padding:"0px,0px,5px,0px"}}>Sign Up</Button>
        </div>
    )
}

export default SignUp
