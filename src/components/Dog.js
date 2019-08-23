import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 300
  }
});

export default function Dog({ image, nameDog, LinkDog }) {
  const classes = useStyles();

  return (
    <Card className="dogCARD">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nameDog}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <a href={LinkDog}>Link to image</a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
