import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styles from './styles';
import Item from './Item';

const tileData = [
  {
    img: '/imagesource',
    img_alt: '/imagesource',
    title: 'first',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/imagesource',
    img_alt: '/imagesource',
    title: 'second',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/imagesource',
    img_alt: '/imagesource',
    title: 'third',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
  {
    img: '/imagesource',
    img_alt: '/imagesource',
    title: 'fourth',
    tech: 'React, Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum arcu placerat sagittis eleifend. Duis euismod eget dolor vel tempus. Aliquam erat volutpat. Curabitur blandit fermentum dictum. Proin id interdum ipsum, vel interdum justo. Vivamus et auctor eros. ',
  },
]

class Portfolio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

export default withStyles(styles)(Portfolio);
