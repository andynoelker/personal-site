import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import styles from './styles';

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.center}>
          <Typography variant="headline" align="center" className={classes.headline}>
            Hi, I'm Andy Noelker.
          </Typography>
          <Avatar alt="Andy Noelker" src="/static/images/profile.jpg" className={classes.avatar} />
          <Typography variant="headline" align="center" className={classes.headline}>
            I'm a full-stack web developer.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.history.push('/portfolio')}
          >
            View my work
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home);
