import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ClockIcon from '@material-ui/icons/AccessTime';

export default class Link extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.link}>
        <div className={classes.clock}>
          <Avatar className={classes.bg}></Avatar>
          <Avatar className={classes.inner}>
            <ClockIcon />
          </Avatar>
        </div>
        <div className={classes.connector}></div>
      </div>
    );
  }
}
