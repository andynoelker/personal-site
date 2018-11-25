import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import Resume from './Resume';
import Skills from './Skills';
import Timeline from './Timeline';
import styles from './styles';
import data from './data';

const resume = "/static/pdf/andy_noelker_resume.pdf";

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <PageTitle>About</PageTitle>
        <PageDescription>
          {data.description}
        </PageDescription>
        <Grid container spacing={16} className={classes.root}>
          <Grid item xs={12} sm={4}>
            <Resume classes={classes} resume={resume} />
            <Skills classes={classes} data={data.skills} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Timeline events={data.timeline} />
          </Grid>
        </Grid>
      </PageWrapper>
    )
  }
}

export default withStyles(styles)(About);
