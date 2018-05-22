import React from 'react';
import { withRouter } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

class Sidebar extends React.Component {
  render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;
    const page = this.props.location.pathname;

    const drawer = (
      <div>
        <div className={classes.sidebarHeader}>
          <Typography align="right" variant="display1" className={`${classes.sidebarTitle} ${classes.firstName}`}>Andy</Typography>
          <Typography align="right" variant="display1" className={classes.sidebarTitle}>Noelker</Typography>
        </div>
        <MenuList>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/'} onClick={() => this.props.history.push('/')}>
            <ListItemIcon className={classes.icon}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
          </MenuItem>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/about'} onClick={() => this.props.history.push('/about')}>
            <ListItemIcon className={classes.icon}>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="About" />
          </MenuItem>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/portfolio'} onClick={() => this.props.history.push('/portfolio')}>
            <ListItemIcon className={classes.icon}>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Portfolio" />
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <div>
      	<Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withRouter(Sidebar);
