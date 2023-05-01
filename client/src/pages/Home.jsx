import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/morefood.png";
import PadThai from "../assets/padthai.jpg";
import Panang from "../assets/panang.jpg";
import MealPlan from "../assets/mealplan.png";
import Prep from "../assets/prep.png";
import GetFood from "../assets/getfood.png";
import jwt from 'jwt-decode';
import Typewriter from 'typewriter-effect';
import { Button, Card, Grid, Typography, CardContent, ImageList, CardActions, CardHeader, IconButton, } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import DisLike from '@mui/icons-material/ThumbDownOffAlt';
import Like from '@mui/icons-material/ThumbUpOffAlt';
import RestAPI from '../RestAPI';

function Home() {
    const [user, setUser] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const [filterText, setFilterText] = React.useState("");
    const [surveyDoneError, setsurveyDoneError] = React.useState(false)

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
        }
    }, [])

    const recipieget = () => {
        setRecipes([]) 
        RestAPI.getCustomRecipies(user.username).then((res) => {
            res.data.map((resData) => {
                setRecipes(prev => [
                    ...prev,
                    {
                        id: resData.id,
                        label: unicodeToChar(resData.title).replace(/['"]+/g, ''),
                        thumbnail: resData.thumbnail.replace(/['"]+/g, '')
                    }
                ]
                )

            })
        })
        



    }
    const putLikedRecipie=(id) =>{
        if (sessionStorage.getItem("user") !== null) {
            const user = JSON.parse(window.sessionStorage.getItem("user"));
            RestAPI.putLikedRecipie(user.id, id)
        }else{
            alert("Must be logged in");
            return;
        }

        
    }

    const putDislikedRecipie=(id) =>{
        if (sessionStorage.getItem("user") !== null) {
            const user = JSON.parse(window.sessionStorage.getItem("user"));
            RestAPI.putDislikedRecipie(user.id, id)
            console.log(user)
        }else{
            alert("Must be logged in");
            return;
        }
        
    }
    
    


    if (user) {
        recipieget()
        if (recipes.length === 0) {
        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <h1> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Welcome')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString(user.username)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .deleteAll()
                                        .start();

                                }}

                            /></h1>
                            <Link to="/survey">
                                <button> Survey </button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div>
                    <Grid style={{ marginBottom: "20px", padding: "30px", backgroundColor: '#7A562E' }}>
                        <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: 'white' }} >
                            "Meal planning is a simple, yet powerful tool that can help you take control of your health and wellbeing." -Unknown
                        </Typography>

                    </Grid>
                </div>
                <div>
                    <Grid style={{ marginBottom: "20px", padding: "30px" }}>
                        <Typography gutterBottom variant="h3" align="left" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            This Weeks Meals
                        </Typography>

                    </Grid>
                </div>
            </div>
        )
    }else{
        return (
        <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid container>
                <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Card variant='outlined' style={{ width: '80%', padding: "20px 5px ", margin: "0 auto" }}>
                        <Grid container spacing={2} direction="row" >
                            {recipes.map((recipe) => (
                                <Grid item xs={6} sm={6} ms={4}>
                                                
                                    <Card sx={{ maxWidth: 550, maxHeight: 600 }} style={{ width: '100%', margin: '10px' }}>
                                        <CardActionArea >
                                        <Link to={`/recipe/${recipe.id}`}>
                                            <CardHeader
                                                title={recipe.label}
                                            />
                                            </Link>
                                            <CardContent alignItems='center' >
                                            <CardMedia
                                                    square='false'
                                                    component="img"
                                                    height="200"
                                                    image={recipe.thumbnail} />
                                                                
                                                <CardActions>
                                                    <IconButton onClick={() => putLikedRecipie(recipe.id)}>
                                                        <Like />
                                                    </IconButton>
                                                    <IconButton onClick={() => putDislikedRecipie(recipe.id)}>
                                                        <DisLike />
                                                    </IconButton>
                                                </CardActions>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                                
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        )
    }

    } else {
        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <p> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Curated Meal Plans ')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString('For All Taste Buds')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .deleteAll()
                                        .start();

                                }}
                            /></p>

                            <Link to="/signup">
                                <button> Sign Up Now</button>
                            </Link>
                            <Link to="/login">
                                <button> Login </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <Grid style={{ marginTop: "20px", marginBottom: "20px", padding: "30px" }}>
                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Are you tired of constantly feeling stressed and overwhelmed when it comes to planning your meals? Do you find yourself eating the same thing every day or relying on takeout and fast food because you don't have time or energy to cook? If so, a meal planning program may be just what you need!
                    </Typography>
                    <div className='row'>
                        <div class="column">
                            <img src={MealPlan} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                By signing up for a meal planning program, you will have access to a variety of healthy and delicious recipes that are tailored to your specific dietary needs and preferences. These programs can also help you save time and money by providing weekly shopping lists and helping you make the most of your ingredients.
                            </Typography>
                        </div>
                        <div class="column">
                            <img src={GetFood} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                Not only will a meal planning program make your life easier and more organized, but it can also have significant health benefits. By planning your meals ahead of time, you are more likely to make nutritious choices and avoid the temptation of unhealthy options.
                            </Typography>
                        </div>
                        <div class="column">
                            <img src={Prep} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                If you're still on the fence, consider the long-term benefits of investing in a meal planning program. By developing healthy eating habits and sticking to a regular meal schedule, you will likely experience increased energy, improved digestion, and better overall health.  </Typography>
                        </div>

                    </div>
                    <Link to="/signup">
                        <Button align="center" fullWidth variant="contained" size="large" style={{ padding: "0px,0px,5px,0px", backgroundColor: "green", marginTop: "10px", marginBottom: "20px" }}> Sign Up Now</Button>
                    </Link>

                    <Typography gutterBottom variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Recipes of the Week
                    </Typography>
                    <Grid container direction="row">
                        <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Card variant='outlined' style={{ maxWidth: 1000, padding: "20px 5px ", margin: "0 auto" }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} sm={6} ms={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <Link to='/signup'>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={PadThai}
                                                        alt="padthai"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            Pad Thai
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio. Ipsum nunc aliquet bibendum enim.
                                                        </Typography>
                                                    </CardContent>
                                                </Link>
                                            </CardActionArea>
                                        </Card>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={Panang}
                                                    alt="padthai"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Panang Curry
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Integer maximus interdum posuere. Pellentesque nunc enim, cursus eget erat ac, pharetra ullamcorper erat. Nullam fringilla laoreet bibendum.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>


                            </Card>
                        </Grid>
                    </Grid>

                </Grid >
                <Grid style={{ marginTop: "20px", marginBottom: "20px", padding: "30px" }}>


                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Our website is dedicated to providing you with the tools and resources you need to plan healthy and delicious meals that fit your busy lifestyle.
                    </Typography>
                    <Typography align="center" style={{ padding: "10px" }}>
                        We understand that meal planning can be a daunting task, which is why we've created a user-friendly platform that makes it easy and enjoyable to plan your meals. Our website offers a wide variety of recipes that are tailored to your specific dietary needs and preferences, including options for gluten-free, vegetarian, and low-carb diets.

                        In addition to our extensive recipe database, our website also provides customizable meal plans that can be tailored to your schedule and lifestyle. We understand that everyone's needs are different, which is why we offer flexible options for daily, weekly, and monthly meal planning.
                    </Typography>
                    <Link to="/signup"  >
                        <Button align="center" fullWidth variant="contained" size="large" style={{ padding: "0px,0px,5px,0px", backgroundColor: "green", marginTop: "10px", marginBottom: "20px" }}> Sign Up Now</Button>
                    </Link>
                </Grid>

            </div >
        )
    }
}

export default Home
