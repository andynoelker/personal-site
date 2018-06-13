import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

export default class Content extends React.Component {

  render() {
    const { classes, handleClose, title, description, tech, image } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="subheading" component="h3">
            Tech Used: {tech}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton
            color="primary"
            className={classes.close}
            aria-label="Close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
