import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import Resume from './Resume';
import Skills from './Skills';
import Description from './Description';
import Timeline from './Timeline';
import styles from './styles';

const timelineData = [
  {
    id: 1,
    date: 'November 2012',
    title: 'Something happened',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus.',
  },
  {
    id: 2,
    date: 'June 2011',
    title: 'Something happened',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus.',
  },
  {
    id: 3,
    date: 'December 2010',
    title: 'Something happened',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nibh enim, sed aliquam elit scelerisque id. Suspendisse sed fringilla purus.',
  },
];

const resume = "/static/pdf/test.pdf";

const skillsData = [
  {
    title: 'PHP',
    length: 5,
  },
  {
    title: 'Javscript',
    length: 5,
  },
  {
    title: 'React',
    length: 4,
  },
  {
    title: 'Redux',
    length: 4,
  },
  {
    title: 'Node.js',
    length: 3,
  },
  {
    title: 'Laravel',
    length: 4,
  },
  {
    title: 'Wordpress',
    length: 3,
  },
  {
    title: 'HTML',
    length: 5,
  },
  {
    title: 'CSS',
    length: 4,
  },
  {
    title: 'C#',
    length: 1,
  },
  {
    title: 'Webpack',
    length: 3,
  },
  {
    title: 'Photoshop',
    length: 2,
  },
];

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <PageTitle>About</PageTitle>
        <Description />
        <Grid container spacing={16} className={classes.root}>
          <Grid item xs={12} sm={4}>
            <Resume classes={classes} resume={resume} />
            <Skills classes={classes} data={skillsData} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Timeline events={timelineData} />
          </Grid>
        </Grid>
      </PageWrapper>
    )
  }
}

export default withStyles(styles)(About);
