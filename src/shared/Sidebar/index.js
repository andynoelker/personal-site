import React from 'react';
import { withRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import { MenuList, MenuItem } from 'material-ui/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

class Sidebar extends React.Component {
  render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;
    const page = this.props.location.pathname;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
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
