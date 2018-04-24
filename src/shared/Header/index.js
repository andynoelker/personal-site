import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';

export default class Header extends React.Component {
  render() {
    const { classes, handleDrawerToggle } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>                         Andy Noelker
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
