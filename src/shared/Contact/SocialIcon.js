import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class SocialIcon extends React.Component {

  render() {
    const { children, classes, title, link } = this.props;

    return (
      <div className={classes.socialIcon}>
        <Button variant="contained" color="primary" href={link} target="_blank">
          {children}
          {title}
        </Button>
      </div>
    )
  }
}
