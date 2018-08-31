import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

export default class Content extends React.Component {

  render() {
    const { classes, handleClose, title, description, tech, image } = this.props;

    return (
      <div>
        <img
          src={image}
          title={title}
          className={classes.media}
        />
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom variant="subheading" component="h3">
          {tech.map(t => (
            <Chip key={t} className={classes.tech} label={t} variant="outlined" color="secondary" />
          ))}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </div>
    );
  }
}
