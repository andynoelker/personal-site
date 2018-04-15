import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import addEvent from '../utils/addEvent';

class App extends React.Component {
  constructor(props) {
    super(props);

    const size = this.getSize();

    this.state = {
      size,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      addEvent(window, 'resize', this.updateSize);
    }
  }

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
    return (<div>
      <p>App is up and running</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>);
  }
}

export default App;
