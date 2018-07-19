import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/AccountBox';
import PortfolioIcon from '@material-ui/icons/Work';
import ContactIcon from '@material-ui/icons/Mail';
import styles from './styles';

class Sidebar extends React.Component {
  render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;
    const page = this.props.location.pathname;

    const drawer = (
      <div>
        <div className={classes.header}>
          <Typography align="center" variant="display1" className={`${classes.title} ${classes.firstName}`}>Andy</Typography>
          <Typography align="center" variant="display1" className={`${classes.title} ${classes.lastName}`}>Noelker</Typography>
        </div>
        <MenuList>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/'} onClick={() => this.props.history.push('/')}>
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
          </MenuItem>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/about'} onClick={() => this.props.history.push('/about')}>
            <ListItemIcon className={classes.icon}>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="About" />
          </MenuItem>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/portfolio'} onClick={() => this.props.history.push('/portfolio')}>
            <ListItemIcon className={classes.icon}>
              <PortfolioIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Portfolio" />
          </MenuItem>
          <MenuItem classes={{ root: classes.menuItem, selected: classes.selected }} selected={page === '/contact'} onClick={() => this.props.history.push('/contact')}>
            <ListItemIcon className={classes.icon}>
              <ContactIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Contact" />
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

export default withRouter(withStyles(styles)(Sidebar));
