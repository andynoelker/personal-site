import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class PageWrapper extends React.Component {

  render() {
    const { children, classes, width } = this.props;
    const style = width ? { maxWidth: width } : {};

    return (
      <div className={classes.root} style={style}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(PageWrapper);
