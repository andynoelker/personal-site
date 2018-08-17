import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import validate from './validate';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      message: {
        value: '',
        error: '',
      },
    };

    this.validation = new validate();
  }

  handleNameChange = (e) => {
    this.setState({ name: {
      value: e.target.value,
      error: e.target.value != '' ? '' : this.state.name.error,
    } });
  }

  handleEmailChange = (e) => {
    this.setState({ email: {
      value: e.target.value,
      error: e.target.value != '' ? '' : this.state.email.error,
    } });
  }

  handleMessageChange = (e) => {
    this.setState({ message: {
      value: e.target.value,
      error: e.target.value != '' ? '' : this.state.message.error,
    } });
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validation.validate(this.state);

    if (this.validation.hasErrors()) {
      this.setState(errors);
    } else {
      this.props.onSubmit({
        name: this.state.name.value,
        email: this.state.email.value,
        message: this.state.message.value,
      });
    }
  }

  render() {
    const { classes, onSubmit, alert } = this.props;
    const { name, email, message } = this.state;

    if (alert != '') {
      return null;
    }

    return (
      <div>
        <Typography variant="subheading" align="center">
          Have a question or want to work together? Fill out the form below and I'll get back to you shortly.
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              label="Name"
              placeholder="Name"
              value={name.value}
              error={name.error !== ''}
              helperText={name.error}
              onChange={this.handleNameChange}
              className={classes.input}
            />
          </div>
          <div>
            <TextField
              label="Email"
              placeholder="Email"
              value={email.value}
              error={email.error !== ''}
              helperText={email.error}
              onChange={this.handleEmailChange}
              className={classes.input}
            />
          </div>
          <div>
            <TextField
              label="Message"
              placeholder="Message"
              value={message.value}
              error={message.error !== ''}
              helperText={message.error}
              onChange={this.handleMessageChange}
              className={classes.input}
              multiline
              rows="4"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Send
            <Icon className={classes.icon}>send</Icon>
          </Button>
        </form>
      </div>
    )
  }
}
