import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
const CardModel = (props) => {
  return (
    <Card sx={{ height: "100vh" }} className={`${props.name}`}>
      <div className="wrapper">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.text}
          </Typography>
        </CardContent>
        <CardActions>
          <button href="">
            More Deals <span>→</span>
          </button>
        </CardActions>
      </div>
      {/* <div className="overlay"></div> */}
    </Card>
  );
};

export default CardModel;
