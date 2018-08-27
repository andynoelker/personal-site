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

const resume = "/static/pdf/test.pdf";

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <PageTitle>About</PageTitle>
        <PageDescription>
          Hi, I'm Andy and I'm a website and application developer based in St. Louis, Missouri. I have been building interactive technologies since my teenage years, such as websites, video games, and interactive kiosks. Check out <Link to="/portfolio">my portfolio</Link> for some examples of projects I've worked on. You can view some of my work on my <a href="https://github.com/andynoelker" target="_blank">GitHub profile</a>. I am also an active member of the programming Q&A site Stack Overflow and you can check out my contributions on my <a href="https://stackoverflow.com/users/5455309/andy-noelker" target="_blank">Stack Overflow profile</a>.
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
