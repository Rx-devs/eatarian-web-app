import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
const Banner = () => {
    const FoodImgUrl = 'https://i.ibb.co/Ky1hwJm/food-img.png';
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom component="div">
                        Your Favourite Food
                        Delivered To You
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh
                    </Typography>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button variant="contained">Go</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={FoodImgUrl} alt="Food" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner ;