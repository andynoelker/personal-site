import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Resume extends React.Component {

  render() {
    const { classes, resume } = this.props;

    return (
      <Paper className={classes.block} elevation={10}>
        <Typography variant="headline">
          Download my Resume
        </Typography>
        <Typography variant="body1" className={classes.blockText}>
          If you would like to view my complete professional history, feel free to download my resume in PDF format.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={resume}
          target="_blank"
        >
          Download Resume
        </Button>
      </Paper>
    );
  }
}
