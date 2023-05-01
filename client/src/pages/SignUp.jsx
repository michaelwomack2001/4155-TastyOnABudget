import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent, Checkbox } from '@mui/material';
import RestAPI from '../RestAPI';
import FormControlLabel from '@mui/material/FormControlLabel';
import BannerImage from "../assets/morefood.png";
import jwt from 'jwt-decode';
import { Link } from "react-router-dom";



const SignUp = () => {
    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [pass2, setPass2] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [userNameError, setUserNameError] = React.useState(false);
    const [passError1, setPassError1] = React.useState(false);
    const [passError2, setPassError2] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState(false);



    const handleClick = (e) => {
        if ((userName !== "" && pass !== "" && pass2 !== "" && email !== "")) {
            if (pass === pass2) {
                RestAPI.addUser(userName, pass, email, firstName).then((res) => {
                    RestAPI.getToken(userName, pass).then((res) => {
                        const token = res.data['access_token']
                        sessionStorage.setItem("token", token)
                        const user = jwt(sessionStorage.getItem("token"));
                        sessionStorage.setItem("user", JSON.stringify(user));
                        console.log(user)
                        window.location.assign("/home");
                    })
                }).catch(err => { 
                    if (err["response"]["status"] === 400) {
                        setUserNameError(true)
                        alert("Username Taken")
                        setUserName("")
                    }

                })
            } else {
                alert("Passwords don't match")
                setPassError1(true);
                setPassError2(true);
            }

        }

        else {
            if (userName !== "") {
                setUserNameError(true);
            } else if (pass !== "") {
                setPassError1(true);
            }
            else if (pass2 !== "") {
                setPassError2(true);
            }
            else if (emailError !== "") {
                setEmailError(true);
            }
        }
        /* setPass("");
        setUserName(""); */
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleFnameChange = (e) => {
        setFirstName(e.target.value);
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
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            Sign Up
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                            Create an account and start planing out your meals!
                        </Typography>
                        <form>
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField
                                        id="fname"
                                        label="First Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={firstName}
                                        onChange={handleFnameChange}
                                        error={firstNameError}
                                        helperText={firstNameError ? "Enter a First Name" : ""}
                                        onBlur={() => (firstName === "" || firstName === null ? setFirstNameError(true) : setFirstNameError(false))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="user-name"
                                        label="User Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={userName}
                                        onChange={handleUsrNameChange}
                                        error={userNameError}
                                        helperText={userNameError ? "Enter a username" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setUserNameError(true) : setUserNameError(false))}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                        error={emailError}
                                        helperText={emailError ? "Enter a Email" : ""}
                                        onBlur={() => (email === "" || email === null ? setEmailError(true) : setEmailError(false))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        margin="normal"
                                        type="password"
                                        fullWidth
                                        required
                                        value={pass}
                                        onChange={handlePassChange}
                                        error={passError1}
                                        helperText={passError1 ? "Enter a password" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setPassError1(true) : setPassError1(false))}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password2"
                                        label="Re-type password"
                                        variant="outlined"
                                        margin="normal"
                                        type="password"
                                        fullWidth
                                        required
                                        value={pass2}
                                        onChange={handlePassChange2}
                                        error={passError2}
                                        helperText={passError2 ? "Enter a password" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setPassError2(true) : setPassError2(false))}
                                    />
                                </Grid>
                                <Grid item xs={12}>

                                    <FormControlLabel
                                        value="termOfServ"
                                        control={<Checkbox />}
                                        required
                                        label="Accept the Terms of Service"
                                        labelPlacement="end"
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth onClick={handleClick} style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>Sign Up</Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography align="center"> Have an account already?</Typography>

                                    <Link to="/login" underline="none">
                                        <Typography align=" center"> Log In</Typography>
                                    </Link>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Grid>
        </div>
    )
}

export default SignUp
