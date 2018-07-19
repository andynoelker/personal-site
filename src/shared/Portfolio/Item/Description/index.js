import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Content from './Content';

class Description extends React.Component {

  render() {
    const { fullScreen, open, handleClose, classes, title, description, tech, image } = this.props;

    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="portfolio-item-title"
        aria-describedby="portfolio-item-description"
        scroll="paper"
      >
        <DialogContent>
          <Content
            classes={classes}
            handleClose={handleClose}
            title={title}
            description={description}
            tech={tech}
            image={image}
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            color="primary"
            className={classes.close}
            aria-label="Close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(withMobileDialog()(Description));
