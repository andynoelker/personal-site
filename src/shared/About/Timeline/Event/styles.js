const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  clockWrapper: {
    minWidth: '205px',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'block',
    },
  },
  date: {
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '15px 20px 0 0',
    width: 115,
    textAlign: 'right',
  },
  link: {
    display: 'inline-block',
    width: 60,
  },
  clock: {
    position: 'relative',
    width: 60,
    height: 60,
    verticalAlign: 'top',
    zIndex: 1,
  },
  bg: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: theme.palette.primary.light,
  },
  inner: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  connector: {
    position: 'absolute',
    width: 10,
    minHeight: 60,
    height: '100%',
    top: 0,
    backgroundColor: theme.palette.primary.light,
    zIndex: 0,
    marginLeft: 25,
    [theme.breakpoints.down('md')]: {
      height: '110%',
    },
  },
  description: {
    width: '100%',
    display: 'inline-block',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '15px',
    position: 'relative',
    margin: '10px 0 15px 25px',
    verticalAlign: 'top',
    boxShadow: '0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    boxSizing: 'border-box',
    [theme.breakpoints.up('md')]: {
      '&:after': {
        right: '100%',
        border: 'solid transparent',
        content: '" "',
        height: 0,
        width: 0,
        position: 'absolute',
        pointerEvents: 'none',
        borderRightColor: theme.palette.primary.main,
        borderWidth: '10px',
        top: '10px',
      },
    },
    [theme.breakpoints.down('md')]: {
      margin: '15px auto',
    },
  },
  text: {
    color: '#FFF',
  },
  title: {
    borderBottom: '1px solid #FFF',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  location: {
    marginBottom: '10px',
  },
});

export default styles;
