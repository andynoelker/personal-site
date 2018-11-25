import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import styles from './styles';
import Item from './Item';
import data from './data';

class Portfolio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <PageTitle>Portfolio</PageTitle>
        <PageDescription>
          {data.description}
        </PageDescription>
        <Grid container spacing={16} className={classes.root}>
          {data.projects.map(tile => (
            <Grid key={tile.title} item xs={12} sm={6}>
              <Item
                title={tile.title}
                description={tile.description}
                tech={tile.tech}
                image={tile.img}
                imageAlt={tile.img_alt}
                website={tile.website}
              />
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    );
  }
}

export default withStyles(styles)(Portfolio);
