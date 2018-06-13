import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default class Title extends React.Component {

  render() {
    const { classes, text, openDescription } = this.props;

    return (
      <div className={classes.title} onClick={openDescription}>
        <Typography variant="title" className={classes.titleText}>{text}</Typography>
        <div>
          <IconButton className={classes.icon}>
            <InfoIcon />
          </IconButton>
        </div>
      </div>
    )
  }
}
