import React from 'react'
import "../styles/Home.css";
import BannerImage from "../assets/morefood.png";
import jwt from 'jwt-decode';
import { Button, Card, Grid, Typography, CardContent, CardHeader } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from "react-router-dom"
import RestAPI from '../RestAPI';

const Recipe = () => {
    const [user, setUser] = React.useState();
    const [recipe, setRecipe] = React.useState([]);
    const id = useParams()
    setRecipe([])
    console.log(id)

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }

    React.useMemo(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));
            console.log(user)
        }
        RestAPI.getRecipeByID(id.recipeGUID).then((res) => {
            console.log(res.data.thumbnail)
            setRecipe(
                {
                    label: unicodeToChar(res.data.title).replace(/['"]+/g, ''),
                    thumbnail: res.data.thumbnail.replace(/['"]+/g, ''),
                    servings: res.data.servings.replace(/['"]+/g, ''),
                    description: res.data.description.replace(/['"]+/g, ''),
                    ingredients: res.data.ingredients.replace(/['"]+/g, ''),
                    nutrition: res.data.nutrition.replace(/['"]+/g, ''),
                    steps: res.data.steps.replace(/['"]+/g, ''),
                }
            )
            console.log(res.data)
        })

    }, [])
    console.log(id)

    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})` }}>
                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Card variant='outlined' style={{ maxWidth: 600, padding: "20px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            {JSON.stringify(id.recipeGUID)}
                            <CardMedia
                                square='false'
                                component="img"
                                height="200"
                                image={recipe.thumbnail} />
                            <Typography >

                            </Typography>


                        </CardContent>
                    </Card>
                </Grid>

            </div>
        </div>
    )
}


export default Recipe