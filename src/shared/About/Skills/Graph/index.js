import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar';

class Graph extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}><Typography variant="caption" className={classes.columnTitle}>Rookie</Typography></Grid>
          <Grid item xs={2}><Typography variant="caption" className={classes.columnTitle}>Competent</Typography></Grid>
          <Grid item xs={2}><Typography variant="caption" className={classes.columnTitle}>Pretty Good</Typography></Grid>
          <Grid item xs={2}><Typography variant="caption" className={classes.columnTitle}>Great</Typography></Grid>
          <Grid item xs={2}><Typography variant="caption" className={classes.columnTitle}>Awesome</Typography></Grid>
        </Grid>
        {data.map(skill => (
          <Bar key={skill.title} classes={classes} length={skill.length} title={skill.title} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Graph);
