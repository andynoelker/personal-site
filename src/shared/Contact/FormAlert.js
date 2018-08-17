import React from 'react';
import Typography from '@material-ui/core/Typography';

const FormAlert = ({ classes, error, alert }) => {
  if (alert == '') {
    return null;
  }

  return (
    <Typography
      color={error ? 'error' : 'default'}
      align="center"
      variant="title"
      className={classes.alert}
    >
      {alert}
    </Typography>
  );

};

export default FormAlert;
