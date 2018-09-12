const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sidebar: {
    height: '100vh',
    position: 'fixed',
  },
  drawerPaper: {
    width: theme.drawerWidth,
    //width: 540,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
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
  header: {
    minHeight: '225px',
    //backgroundColor: theme.palette.primary.main,
    //backgroundColor: theme.palette.primary.light,
    //backgroundColor: theme.palette.primary.dark,
  },
  title: {
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
