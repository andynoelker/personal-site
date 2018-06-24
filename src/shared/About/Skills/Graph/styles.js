const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  columnTitle: {
    textAlign: 'center',
  },
  bar: {
    margin: '15px 0',
  },
  filled: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '100%',
  },
  end: {
    backgroundColor: theme.palette.primary.main,
    width: '50%',
    height: '100%',
  },
});

export default styles;
