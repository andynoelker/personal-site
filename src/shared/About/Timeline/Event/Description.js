import React from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

export default class Description extends React.Component {

  render() {
    const { classes, title, text } = this.props;

    return (
      <div className={classes.description}>
        <Typography variant="title" className={classNames(classes.text, classes.title)}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </div>
    );
  }
}
