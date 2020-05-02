import React, { Component } from "react";
import "./checkIn.css";
import axios from "axios";

// const DEV = process.env.

export default class CheckIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      emplid: "",
      submitted: false,
      loading: false,
      errorMessages: [
        "Please enter only a name with letters",
        "Please enter a valid email",
        "EMPLID is only numeric and has 8 integers"
      ],
      errorId: [
        0,
        0,
        0,
        0,
      ]
    };
  }

  onComponentDidMount() {
    document.title = "Hunter ACM - Check In";
  }

  update = (e) => {
    if (e.target.name === "email") {
      let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(re.test(e.target.value)){
        let ps = this.state.errorId;
        ps[1] = 0;
        this.setState({
          email: e.target.value,
          errorId: ps,
        });
      } else {
        let ps = this.state.errorId;
        ps[1] = 1;
        this.setState({
          email: e.target.value,
          errorId: ps,
        });
      }
    } else if (e.target.name === "emplid") {
      let re = /^[0-9]{0,8}$/;
      if (re.test(e.target.value)) {
        let ps = this.state.errorId;
        ps[2] = 0;
        this.setState({
          emplid: e.target.value,
          errorId: ps,
        });
      } else {
        let ps = this.state.errorId;
        ps[2] = 1;
        this.setState({
          errorId: ps,
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  submit = () => {
    this.setState({
      loading: true,
    });
    axios
      .post("http://localhost:8000/db/addNew", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        emplid: this.state.emplid,
      })
      .then(res => {
        console.log(res);
        this.setState({
          success: res.data.success,
          message: res.data.message,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="content">
        <div className="checkInWrapper">
          <div>
            <div className="title">Check In to our Meeting!</div>
            <div className="description">Fill out to check in:</div>
            <input
              name="first_name"
              type="text"
              value={this.state.first_name}
              placeholder="First Name"
              onChange={this.update}
              className="name"
            />
            <input
              name="last_name"
              type="text"
              value={this.state.last_name}
              placeholder="Last Name"
              onChange={this.update}
              className="name"
            />
          </div>
          <div>
            <input
              name="email"
              type="text"
              value={this.state.email}
              placeholder="email@myhunter.cuny.edu"
              onChange={this.update}
              className="email"
              />
              {this.state.errorId[1] ? <div className="error">{this.state.errorMessages[1]}</div> : null}
          </div>
          <div>
            <input
              name="emplid"
              type="text"
              value={this.state.emplid}
              placeholder="EMPLID"
              onChange={this.update}
              className="emplid"
            />
          </div>
          {this.state.errorId[2] ? <div className="error">{this.state.errorMessages[2]}</div> : null}
          <div>
            <button onClick={this.submit} className="btn">
              Check In
            </button>
          </div>
        </div>
      </div>
    );
  }
}
