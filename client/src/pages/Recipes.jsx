import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, IconButton, Card, Grid, Typography, CardMedia, Autocomplete, CardActions, CardHeader, CardContent, CardActionArea, Select, MenuItem } from '@mui/material';
import RestAPI from '../RestAPI';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';

import "../styles/Recipes.css";
import SearchIcon from '@mui/icons-material/Search';
import DisLike from '@mui/icons-material/ThumbDownOffAlt';
import Like from '@mui/icons-material/ThumbUpOffAlt';
import { margin } from '@mui/system';




const Recipes = () => {
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const [filterText, setFilterText] = React.useState("");
    const [tagOrTitle, setTagOrTitle] = React.useState(true);
    const [textFieldError, setTextFieldError] = React.useState(false)

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }

    const handleSearch = () => {
        setRecipes([])
        if(tagOrTitle){
            RestAPI.getRecipesSearchTitle(filterText).then((res) => {
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
        } else if (!tagOrTitle) {
            RestAPI.getRecipesSearchTags(filterText).then((res) => {
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
        
        if (recipes.length===0){
            setTextFieldError(true)
            alert("ERROR ENTER A CORRECT SEARCH TERM AND OR SELECT A TAG")
        } else {
            setTextFieldError(false)
        }
       
    }


    return (
        <div >
            <Grid style={{ marginTop: "20px", marginBottom: "750px" }}>
                <h1> What are you craving today?</h1>
                <div style={{ paddingTop: '5px', paddingLeft: '90px', justifySelf: "center", flexDirection:"row"}}>
                    <TextField
                        style={{ width: "60%" }}
                        onChange={(e) => {
                            setFilterText(e.target.value);
                        }}
                        error={textFieldError}
                    />
                    <Select
                        style={{ width: "10%", margin:"5px 5px 5px 5px" }}
                        onChange={(e) => {
                            setTagOrTitle(e.target.value);
                            console.log(tagOrTitle)
                        }}
                    >
                        <MenuItem value={true}>Title</MenuItem>
                        <MenuItem value={false}>Tag</MenuItem>
                    </Select>
                    <button className="searchButton" style={{ marginLeft: '15px', marginTop: '2px' }}
                        onClick={() => handleSearch()}
                    >
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
                <div>
                    <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Card variant='outlined' style={{ width: '80%', padding: "20px 5px ", margin: "0 auto" }}>
                                    <Grid container spacing={2} direction="row" >
                                        {recipes.map((recipe) => (
                                            <Grid item xs={6} sm={6} ms={4}>
                                                <Link to={`/recipe/${recipe.id}`}>
                                                <Card sx={{ maxWidth: 550, maxHeight: 600 }} style={{ width: '100%', margin: '10px' }}>
                                                    <CardActionArea >
                                                        <CardHeader
                                                            title={recipe.label}
                                                        />
                                                        <CardContent alignItems='center' >
                                                            <CardMedia
                                                                square='false'
                                                                component="img"
                                                                height="200"
                                                                image={recipe.thumbnail} />
                                                            <CardActions>
                                                                <IconButton >
                                                                    <Like />
                                                                </IconButton>
                                                                <IconButton >
                                                                    <DisLike />
                                                                </IconButton>
                                                            </CardActions>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>


                </div>
            </Grid>
        </div>
    )
}
export default Recipes