const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    display: 'none',
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  menuItem: {
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  sidebarHeader: {
    minHeight: '225px',
  },
  sidebarTitle: {
    fontSize: '51px',
    paddingRight: '15px',
  },
  firstName: {
    paddingTop: '50px',
  },
  primary: {},
  icon: {},
  selected: {},
});

export default styles;
