import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from '../shared/App';
import sharedTheme from '../shared/theme';

export default class ClientApp extends React.Component {
  componentDidMount() {
    // Remove server-side injected CSS
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const theme = createMuiTheme(sharedTheme);

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <App/>
        </MuiThemeProvider>
      </Router>
    );
  }
}
