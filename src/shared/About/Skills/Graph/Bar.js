import React from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Bar extends React.Component {
  createBars = () => {
    const { classes, length } = this.props;

    let bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <Grid key={i} item xs={2}>
          <div className={classNames({
            [classes.filled]: i < length,
            [classes.end]: i == length,
          })}></div>
        </Grid>
      );
    }

    return bars;
  }

  render() {
    const { classes, title } = this.props;

    return (
        <Grid container spacing={0} className={classes.bar}>
          <Grid item xs={2} className={classes.label}><Typography variant="subheading">{title}</Typography></Grid>
          {this.createBars()}
        </Grid>
    )
  }
}
