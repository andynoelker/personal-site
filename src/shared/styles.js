const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
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
    backgroundColor: theme.palette.primary.main,
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
      //backgroundColor: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
      //backgroundColor: theme.palette.primary.dark,
      //backgroundColor: theme.palette.primary.light,
      '& $primary, & $icon': {
        //color: theme.palette.common.white,
        //color: theme.palette.primary.main,
        color: '#000',
      },
    },
  },
  sidebarHeader: {
    minHeight: '225px',
    backgroundColor: theme.palette.primary.main,
    //backgroundColor: theme.palette.primary.light,
    //backgroundColor: theme.palette.primary.dark,
  },
  sidebarTitle: {
    fontSize: '51px',
    paddingRight: '15px',
    color: theme.palette.common.white,
    textTransform: 'uppercase',
  },
  firstName: {
    paddingTop: '65px',
    fontSize: '72px',
    lineHeight: '68%',
    paddingLeft: '8px',
  },
  lastName: {
    fontSize: '43px',
  },
  primary: {},
  icon: {},
  selected: {},
});

export default styles;
