import React from 'react'
import BannerImage from "../assets/morefood.png";
import "../styles/About.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Box, Grid, Typography, CardContent, ToggleButtonGroup, ToggleButton, FormHelperText } from '@mui/material';


function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${BannerImage})` }}
            >

            </div>

            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Welcome to <b> Buy Potato Bake Potato </b> your one-stop shop for all your meal-planning needs!
                </p>
                <p>
                    Our mission is to help busy individuals and families make meal planning easier,
                    healthier, and more enjoyable. We believe that meal planning is an essential part
                    of a healthy lifestyle, but we know that it can be overwhelming and time-consuming.
                    That's why we created <b> Buy Potato Bake Potato </b> to take the stress out of meal planning
                    and make it simple, fun, and convenient.

                </p>
                <p>
                    Our website offers a wide range of features and resources to help you plan your meals with ease. Whether you're looking for healthy recipes, meal-planning tools, or expert advice, we've got you covered.

                </p>
                <p>
                    Here are some of the features you'll find on our website:


                </p>
                <p>
                    1. Recipe Database - Our recipe database contains thousands of delicious and nutritious recipes that are easy to prepare and perfect for busy schedules.

                </p>
                <p>
                    2.Meal Planning Tools - Our meal planning tools allow you to create personalized meal plans that meet your specific dietary needs and preferences.

                </p>
                <p>
                    3.  Shopping List Generator - Our shopping list generator makes grocery shopping a breeze by automatically generating a shopping list based on your meal plan.

                </p>
                <p>
                    4. Expert Advice - Our team of nutritionists and dietitians are here to provide you with expert advice and support to help you achieve your health and wellness goals.

                </p>
                <p>
                    At <b> Buy Potato Bake Potato </b>, we believe that meal planning should be a fun and enjoyable experience. That's why we've created a community of like-minded individuals who share their experiences, tips, and advice on our website and social media channels.

                </p>
                <p>
                    Join our community today and start your journey to healthier and happier meal planning!

                </p>



                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Frequently Asked Questions

                    </Typography>


                    <Grid style={{ marginTop: "20px", marginBottom: "20px", padding: "30px" }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Is it Free?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Buy Potato Bake Potato is a web app and free meal planning tool that helps you to plan your meals and build shopping lists. It's available for free on the web (desktop and mobile). Ideal for busy people and families to plan their weekly meals and eat healthier.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How to make a meal plan?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    To make a weekly menu plan:
                                </Typography>
                                <Typography>
                                    1. Compose a list of recipes from Eatwell101 or any website you like on the web. Make sure to ask your family what they like so you can build your meal plan with confidence.
                                </Typography>
                                <Typography>
                                    2. Sort by proteins: Chicken, beef, fish, eggs, etc - Or adapt depending on your dietary preferences. This helps having a solid base for each meal.

                                </Typography>
                                <Typography>
                                    3. Add each recipe to every days of the week on the meal planner. You can add several recipes for the same day.

                                </Typography>
                                <Typography>
                                    4.Make your grocery list (Eatwell101's Meal Planner helps you do that!). Take into account what you already have in your pantry or fridge.

                                </Typography>
                                <Typography>
                                    5. Shop, cook, eat!

                                </Typography>
                                <Typography>
                                    6. Repeat: Create a new meal plan. Our Menu Planner allows you to keep your weekly meal plan in printable or PDF format. This way you can make multiple meal plans.

                                </Typography>
                                <Typography>
                                    7.  Rotate: Alternate your meal plans and make adjustments for the next weeks.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Why is meal planning important?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Planning your weekly menu in advance allows you to know what your meals will look like and what you need to buy at the grocery store - cutting down unplanned trips and impulse purchases. Meal planning gives you a good overview of what to include in your weekly meals if you follow a specific diet. Having a menu plan will also help you reduce food waste, which will save you money on the long run!</Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>

                </Grid>
                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Background
                    </Typography>

                    <Typography gutterBottom>
                        Once upon a time, there was a group of five college students who were passionate about healthy eating and living a balanced lifestyle. They often found it difficult to plan meals that were both nutritious and delicious, and they noticed that many of their peers were struggling with the same issue.
                    </Typography>
                    <Typography gutterBottom>
                        One day, while sitting in the campus cafeteria, they had a brilliant idea - why not create a meal planning website that would make it easy for anyone to plan healthy meals based on their dietary preferences and restrictions? They immediately got to work, dividing up the tasks based on their individual strengths and skills.
                    </Typography>
                    <Typography gutterBottom>
                        The first step was to conduct extensive research on nutrition and healthy eating habits. They consulted with nutritionists and dieticians, and scoured the latest scientific studies and articles on the topic. Armed with this knowledge, they began to develop a database of recipes that met certain nutritional criteria, such as low-fat, high-protein, and vegan.
                    </Typography>
                    <Typography gutterBottom>
                        Next, they worked on the website's design and user interface. They wanted to create a platform that was easy to navigate and visually appealing, with clear and concise instructions for meal planning. They also incorporated features that allowed users to create grocery lists based on their meal plans and track their progress towards their health goals.
                    </Typography>
                    <Typography gutterBottom>
                        As they worked on the website, the students faced many challenges and setbacks. They struggled with coding and programming issues, and encountered difficulties in securing funding to support their project. But they persisted, working tirelessly day and night to make their vision a reality.
                    </Typography>
                    <Typography gutterBottom>
                        Finally, after months of hard work and dedication, they launched their meal planning website to the public. They promoted it on social media and reached out to health and wellness bloggers to help spread the word. To their delight, the response was overwhelmingly positive. Users praised the website's intuitive design and helpful features, and many reported significant improvements in their health and wellbeing thanks to the healthy meal plans.
                    </Typography>
                    <Typography gutterBottom>
                        As the website continued to grow in popularity, the students expanded their offerings to include additional features such as customized workout plans and access to personalized coaching from certified nutritionists. Their website became a one-stop shop for all things health and wellness, and they continued to innovate and improve their platform to better serve their users.
                    </Typography>
                    <Typography gutterBottom>
                        In the end, the group of college students succeeded in creating a thriving business that helped thousands of people live healthier, happier lives. Their meal planning website became a beloved and trusted resource for anyone looking to improve their nutrition and make positive changes in their lifestyle.
                    </Typography>


                </Grid>

            </div>

        </div>
    )
}

export default About
