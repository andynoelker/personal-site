const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      //backgroundColor: theme.palette.primary.main,
      //backgroundColor: theme.palette.common.white,
      //backgroundColor: theme.palette.primary.light,
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  },
  center: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  headline: {
    fontSize: '60px',
    color: theme.palette.common.white,
  },
  avatar: {
    margin: '0 auto',
    width: 160,
    height: 160,
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },
});

export default styles;
