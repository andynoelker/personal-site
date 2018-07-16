import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Form from './Form';

class Contact extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Form classes={classes} />
      </div>
    )
  }
}

export default withStyles(styles)(Contact);
