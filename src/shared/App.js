import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import NoMatch from './NoMatch';
import addEvent from '../utils/addEvent';
import Sidebar from './Sidebar';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    const size = this.getSize();

    this.state = {
      size,
      mobileOpen: false,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      addEvent(window, 'resize', this.updateSize);
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  breakAt = (sizeCheck) => {
    const { size } = this.state;
    switch (sizeCheck) {
      case 'lg':
      case 'md':
        return size === 'lg';
      case 'sm':
        return size === 'lg' || size === 'md';
      case 'xs':
      case 'xxs':
      default:
        return true;
    }
  }

  /**
   * Get size of screen based on bootstrap breakpoints
   */
  getSize() {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;

    // All sizes
    if (width >= 1200) {
      return 'lg';
    } else if (width >= 992) {
      return 'md';
    } else if (width >= 768) {
      return 'sm';
    } else if (width >= 475) {
      return 'xs';
    } else {
      return 'xxs';
    }
  }

  updateSize = () => {
    const size = this.getSize();
    if (size !== this.state.size) {
      this.setState({ size });
    }
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Sidebar
          classes={classes}
          theme={theme}
          handleDrawerToggle={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Header
            classes={classes}
            handleDrawerToggle={this.handleDrawerToggle}
          />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route exact path="/portfolio" render={props => <Portfolio {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </main>
    </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
