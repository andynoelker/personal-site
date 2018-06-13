import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Content from './Content';

class Description extends React.Component {

  render() {
    const { open, handleClose, classes, title, description, tech, image } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="portfolio-item-title"
        aria-describedby="portfolio-item-description"
      >
        <Content
          classes={classes}
          handleClose={handleClose}
          title={title}
          description={description}
          tech={tech}
          image={image}
        />
      </Dialog>
    )
  }
}

export default withStyles(styles)(Description);
