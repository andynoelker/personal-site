import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class PageDescription extends React.Component {

  render() {
    return (
      <Typography variant="subheading" align="center">
        {this.props.children}
      </Typography>
    )
  }
}
