const styles = {
  root: {
    position: 'relative',
    height: '400px',
  },
  title: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
    height: '68px',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  titleText: {
    flexGrow: 1,
    marginLeft: '16px',
    color: '#FFF',
    overflow: 'hidden',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};

export default styles;
