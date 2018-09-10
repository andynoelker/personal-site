import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

export default class Section extends React.Component {

  render() {
    const { classes, title, skills } = this.props;

    return (
      <div>
        <Typography variant="headline">
          {title}
        </Typography>
        <div>
          {skills.map(s => (
            <Chip key={s.title} className={classes.skill} label={s.title} variant="outlined" color="secondary" />
          ))}
        </div>
      </div>
    )
  }
}
