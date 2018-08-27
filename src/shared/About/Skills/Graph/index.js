import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar';

class Graph extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        {data.map(skill => (
          <Bar key={skill.title} classes={classes} length={skill.length} title={skill.title} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Graph);
