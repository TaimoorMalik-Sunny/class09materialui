import React from 'react';
import NavBar from './Navbar';
import Barchart from './BarChart';
import PeiChart from './pie';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
 
  paper: {
    height: 500,
    width: 400,
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    padding: 15


  },
  input: {
    width: '95%',
    marginBottom: 30

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar/>


      <Paper elevation={3} className={classes.paper} >
        <h1>login </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email " className={classes.input} />

          <TextField label="Enter Password " className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
</Button>

        </form>
       
      </Paper>
      <Barchart/>
      <PeiChart/>
    </div>
  );
}

export default App;
