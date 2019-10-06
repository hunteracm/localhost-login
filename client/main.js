import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from '../imports/ui/Navbar.js';
import Footer from '../imports/ui/Footer.js';
import App from '../imports/ui/App.js';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

Meteor.startup(() => {
  ReactDOM.render(
    <Navbar />,
    document.getElementById('navbar')
  );

  ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
  );

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* initialize css */}
        <App />
    </ThemeProvider>,
    document.getElementById('app')
  );
});
