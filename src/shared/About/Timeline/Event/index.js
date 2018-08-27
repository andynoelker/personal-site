import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import EventDate from './EventDate';
import Link from './Link';
import Description from './Description';

class Event extends React.Component {

  render() {
    const { classes, event } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.clockWrapper}>
          <EventDate classes={classes} date={event.date} />
          <Link classes={classes} />
        </div>
        <Description
          classes={classes}
          text={event.desc}
          title={event.title}
          location={event.location}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Event);
