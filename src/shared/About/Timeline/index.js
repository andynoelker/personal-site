import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Event from './Event';
import styles from './styles';

class Timeline extends React.Component {

  render() {
    const { classes, events } = this.props;

    return (
      <div>
        {events.map(event => (
          <Event key={event.id} classes={classes} event={event} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Timeline);
