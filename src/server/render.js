const DEV = process.env.NODE_ENV === 'development';
const bundleUrl = '/static/js/bundle.js';

export default (html, css) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">

      <link rel="manifest" href="/public/manifest.json">
      <link rel="shortcut icon" href="/public/favicon.ico">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

      <title>Andy Noelker</title>
    </head>
    <body style="margin:0;">
      <div id="root">${html}</div>
      <style id="jss-server-side">${css}</style>
      <script type="application/javascript" src="${bundleUrl}"></script>
    </body>
  </html>
`;
