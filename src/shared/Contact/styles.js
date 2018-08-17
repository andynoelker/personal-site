const styles = theme => ({
  root: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  input: {
    width: '100%',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '42px',
  },
  underline: {
    height: '5px',
    width: '100px',
    margin: '0 auto 15px',
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    marginLeft: theme.spacing.unit,
  },
  socialIcons: {
    margin: '0 auto',
    textAlign: 'center',
  },
  socialIcon: {
    display: 'inline-block',
    margin: theme.spacing.unit,
  },
  socialSVG: {
    paddingRight: theme.spacing.unit,
  },
  alert: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
});

export default styles;
