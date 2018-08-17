import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ajax from '../../utils/ajax';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import FormAlert from './FormAlert';
import SocialIcon from './SocialIcon';
import Github from './icons/Github';
import StackOverflow from './icons/Stackoverflow';
import LinkedIn from './icons/LinkedIn';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      alert: '',
    }
  }

  handleSubmit = values => {
    ajax({
      method: 'POST',
      url: '/contact',
      data: values,
    }).then(resp => {
      try {
        resp.json().then(payload => {
          this.setState(payload);
        });
      } catch (error) {
        this.setState({
            error: true,
            alert:  'Something went wrong when sending the message. Please refresh the page and try again.',
        });
      }
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          align="center"
          variant="headline"
          className={classes.title}
        >Contact</Typography>
        <div className={classes.underline}></div>
        <FormAlert classes={classes} error={this.state.error} alert={this.state.alert} />
        <Form classes={classes} onSubmit={this.handleSubmit} alert={this.state.alert} />
        <div className={classes.socialIcons}>
          <SocialIcon classes={classes} link="https://github.com/andynoelker" title="Github">
            <Github className={classes.socialSVG} />
          </SocialIcon>
          <SocialIcon classes={classes} link="https://stackoverflow.com/users/5455309/andy-noelker" title="StackOverflow">
            <StackOverflow className={classes.socialSVG} />
          </SocialIcon>
          <SocialIcon classes={classes} link="http://www.linkedin.com/in/andy-noelker" title="LinkedIn">
            <LinkedIn className={classes.socialSVG} />
          </SocialIcon>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Contact);
