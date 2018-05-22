import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import Context from 'react-context-component';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import render from './render';
import App from '../shared/App';
import theme from '../shared/theme';

const ErrorPage = () => <h1>Oops there was an error</h1>;

const reactApp = (req, res) => {
  const { headers, method, url } = req;
  const context = {};
  let HTML;
  let status = 200;

  const setStatus = (newStatus) => {
    status = newStatus;
  }

  // Create theme for server rendering of Material-UI
  const sheetsRegistry = new SheetsRegistry();
  const theme = createMuiTheme(theme);
  const generateClassName = createGenerateClassName();

  try {
    const html = renderToString(
      <Context setStatus={setStatus}>
        <Router context={{}} location={req.url}>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
              <App />
            </MuiThemeProvider>
          </JssProvider>
        </Router>
      </Context>
    );

    const css = sheetsRegistry.toString();

    HTML = render(html, css);
  } catch (error) {
    HTML = render(ErrorPage);
    status = 500;
  }

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.status(status).send(HTML);
  }
}


export default reactApp;
