import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PageWrapper from '../components/PageWrapper';
import PageTitle from '../components/PageTitle';
import styles from './styles';
import Item from './Item';

const tileData = [
  {
    img: '/static/img/placeholder.png',
    img_alt: '/static/img/placeholder.png',
    title: 'first',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/static/img/placeholder.png',
    img_alt: '/static/img/placeholder.png',
    title: 'second',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/static/img/placeholder.png',
    img_alt: '/static/img/placeholder.png',
    title: 'third',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/static/img/placeholder.png',
    img_alt: '/static/img/placeholder.png',
    title: 'fourth',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
]

class Portfolio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <PageTitle>Portfolio</PageTitle>
        <Grid container spacing={16} className={classes.root}>
          {tileData.map(tile => (
            <Grid key={tile.title} item xs={12} sm={6}>
              <Item
                title={tile.title}
                description={tile.description}
                tech={tile.tech}
                image={tile.img}
                imageAlt={tile.img_alt}
              />
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    );
  }
}

export default withStyles(styles)(Portfolio);
