import React, { Component } from "react";
import dates from "./dates.json";
import "./calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Date = p => {
    return (
      <div className="calendarMonth">
      <div className="calendarDate">{p.props.date}</div>
      {/* {p.props.month} Some way to get month here */}
      </div>
    )
  };

  render() {
    return (
      <div className="content">
        <div className="calendarWrap">
          <div className="title">This Semester's Calendar</div>
        </div>
      </div>
    );
  }
}
