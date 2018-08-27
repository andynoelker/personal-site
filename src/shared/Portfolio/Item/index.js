import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
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
    const { children, classes, title, description, tech, image, imageAlt, website } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          onClick={this.handleOpen}
        >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <Title classes={classes}>{title}</Title>
      </ButtonBase>
      <Description
        open={open}
        handleClose={this.handleClose}
        title={title}
        description={description}
        tech={tech}
        image={imageAlt}
        website={website}
      />
    </div>
    )
  }
}

export default withStyles(styles)(Item);
