import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { name, email, message } = this.state;

    return (
      <form>
        <div>
          <TextField
            label="Name"
            placeholder="Name"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <TextField
            label="Email"
            placeholder="Email"
            value={email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <TextField
            label="Message"
            placeholder="Message"
            value={message}
            onChange={this.handleMessageChange}
            multiline
            rows="4"
          />
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
          Send
          <Icon className={classes.icon}>send</Icon>
        </Button>
      </form>
    )
  }
}
