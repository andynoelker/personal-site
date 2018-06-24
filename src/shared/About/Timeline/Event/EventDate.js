import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class EventDate extends React.Component {

  render() {
    const { classes, date } = this.props;

    return (
      <div className={classes.date}>
        <Typography variant="body2">{date}</Typography>
      </div>
    );
  }
}
