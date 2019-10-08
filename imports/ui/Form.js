import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      empl: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.fname + ' ' + this.state.lname  + ' ' + this.state.empl  + ' ' + this.state.email);
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
