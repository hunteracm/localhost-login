import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

function today(){
  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}-${month < 10 ?`0${month}`:`${month}`}-${day < 10 ?`0${day}`:`${day}`}`;
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      empl: '',
      email: '',
      date: today()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Got: ' + this.state.fname + ' ' + this.state.lname  + ' ' + this.state.empl  + ' ' + this.state.email + ' ' + this.state.date);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          fname:
          <input type="text" name="fname" onChange={this.handleChange} />
        </label>

        <label>
          lname:
          <input type="text" name="lname" onChange={this.handleChange} />
        </label>
        <br/>

        <label>
          empl:
          <input type="text" name="empl" onChange={this.handleChange} />
        </label>
        <br/>

        <label>
          email:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <br/>

        <Button
          type="submit"
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#7e57c2",
          }}
        >
          Save
        </Button>
      </form>
    );
  }
}
