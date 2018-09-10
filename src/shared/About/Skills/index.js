import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Section from './Section';

export default class Skills extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.block} elevation={10}>
        <Typography variant="body1" className={classes.blockText}>
          Throughout my years of programming and building interactive systems, I have developed a robust skill set. These are the languages and technologies I am most proficient in.
        </Typography>
        <Section title="Frontend" skills={data.frontend} classes={classes} />
        <Section title="Backend" skills={data.backend} classes={classes} />
        <Section title="Technology" skills={data.technology} classes={classes} />
      </Paper>
    );
  }
}
