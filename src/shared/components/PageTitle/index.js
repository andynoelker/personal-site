import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class PageTitle extends React.Component {

  render() {
    const { children, classes } = this.props;

    return (
      <div>
        <Typography
          align="center"
          variant="headline"
          className={classes.title}
        >
          {children}
        </Typography>
        <div className={classes.underline}></div>
      </div>
    )
  }
}

export default withStyles(styles)(PageTitle);
