import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

const CardAdd = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/pokemon")
      .then((response) => {
        console.log(response.data);
        setData(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {data.map((pokemon) => (
          <Grid item xs={4} key={pokemon.id}>
            <Card
              sx={{
                maxWidth: 345,  
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={pokemon.image_url}
                title={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {pokemon.hitpoints}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardAdd;
