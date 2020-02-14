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
        "EMPLID is only Numeric"
      ],
      errorId: [
        0,
        0,
        0,
        0,
      ]
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  onComponentDidMount() {
    document.title = "Hunter ACM - Check In";
  }

  update(e) {
    if (e.target.name == "") {
    } else if (e.target.name == "emplid") {
      let re = /^[0-9]{0,9}$/;
      if (re.test(e.target.value)) {
        let ps = this.state.errorId;
        ps[1] = 0;
        this.setState({
          emplid: e.target.value,
          errorId: ps,
        });
      } else {
        let ps = this.state.errorId;
        ps[1] = 0;
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

  submit() {
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
            <div className="">Fill out to check in:</div>
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
