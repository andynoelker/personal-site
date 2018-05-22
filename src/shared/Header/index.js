import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends React.Component {
  getPageName = () => {
    const name = this.props.location.pathname.charAt(1).toUpperCase() + this.props.location.pathname.slice(2);
    return name ? name : 'Andy Noelker';
  }

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
          <Typography variant="title" color="inherit" noWrap>
            {this.getPageName()}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
