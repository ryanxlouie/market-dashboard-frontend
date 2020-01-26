import React from 'react';

/* Stylesheets */
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const NavigationCard = (props) => {
  const classes = useStyles();
  const {
    pic,
    bodyTitle,
    bodyText,
    link,
    changePage,
  } = props;

  return (
    <Card 
      className={classes.card}
      onClick={() => changePage(link)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
        >
          <img
            src={pic}
            style={{width: '100%', height: '100%', cursor: 'pointer'}} 
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {bodyTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bodyText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default NavigationCard;