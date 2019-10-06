import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

function Social() {
  return (
    <div class="social" align="center">
      <a href="https://www.facebook.com/hunteracm">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://twitter.com/weareHunterACM">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://hunteracm.slack.com">
        <i class="fa fa-slack"></i>
      </a>
      <a href="https://www.github.com/hunteracm">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://acm.us14.list-manage.com/subscribe?u=40574f669e2894fb2eb79e2b6&amp;id=d40cd1198a">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body1" align="center">
      {'© '}
      <Link color="inherit" href="https://github.com/hunteracm/localhost-login/">
        Hunter ACM
      </Link>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'}
    </Typography>
  );
}

function License() {
  return (
    <Typography variant="body1" align="center">
      <Link color="inherit" href="https:github.com/hunteracm/localhost-login/blob/master/LICENSE">
        GPL-3.0 License
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(0),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#282A36',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function StickyFooter() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Grid container justify="center" spacing={spacing}>

          <Grid item xs={6}>
            <Typography variant="body1" align="center">
              {'We strive to make Hunter ACM a safe, welcoming, and inclusive community for all our members. '}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" align="center">
              {'Connect with Us '}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <div align="center">
              <Button variant="outlined" style={{color: "#F3BA4B",}} href="https:www.hunteracm.org/codeofconduct" className={classes.button}>
                Read Our Code of Conduct
              </Button>
            </div>
          </Grid>

          <Grid item xs={6}>
            <Social />
          </Grid>

          <Grid item xs={6}>
            <Copyright />
          </Grid>

          <Grid item xs={6}>
            <License />
          </Grid>

        </Grid>
      </footer>
    </div>
  );
}
