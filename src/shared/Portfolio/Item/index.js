import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Title from './Title';
import Description from './Description';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { children, classes, title, description, tech, image } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        {children}
        <Title
          text={title}
          classes={classes}
          openDescription={this.handleOpen}
        />
        <Description
          open={open}
          handleClose={this.handleClose}
          title={title}
          description={description}
          tech={tech}
          image={image}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Item);
