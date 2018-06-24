import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Graph from './Graph';

export default class Skills extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.block} elevation={10}>
        <Typography variant="headline">
          Technical Skills
        </Typography>
        <Typography variant="body1" className={classes.blockText}>
          Throughout my years of programming and building interactive systems, I have developed a robust skill set. These are the languages and technologies I am most proficient in.
        </Typography>
        <Graph data={data} />
      </Paper>
    );
  }
}
