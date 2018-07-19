import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default class Title extends React.Component {

  render() {
    const { classes, children } = this.props;
    return (
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subheading"
          color="inherit"
          className={classes.imageTitle}
        >
          {children}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    )
  }
}
