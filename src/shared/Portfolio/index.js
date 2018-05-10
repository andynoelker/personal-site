import React from 'react';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styles from './styles';

const tileData = [
  {
    img: '/imagesource',
    title: 'test',
    author: 'Someone',
  },
  {
    img: '/imagesource',
    title: 'test',
    author: 'Someone',
  },
  {
    img: '/imagesource',
    title: 'test',
    author: 'Someone',
  },
  {
    img: '/imagesource',
    title: 'test',
    author: 'Someone',
  },
]

class Portfolio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader component="div">December</Subheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Portfolio);
