import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Form from './Form.js';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));


export default function Body() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" align="center">
        {'Welcome to Hunter ACM! '}
      </Typography>

      <br/>
      <br/>

      <Typography variant="h3" align="center">
        {'Enjoy the Meeting! '}
      </Typography>

      <br/>

      <Typography variant="h4" align="center">
        {'Please Sign in Below '}
      </Typography>

      <br/>
      <br/>
      <br/>

      <Form>
      </Form>
    </div>
  );
}
