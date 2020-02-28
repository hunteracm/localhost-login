import React, { Component } from "react";
import datesFile from "./dates.json";
import DateComponent from "./Date";
import "./calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
    };
  }

  componentDidMount() {
    this.setState({
      dates: datesFile,
    });
  }

  DateArray = p => {
    return (
      <div className="calendar">
        {datesFile.dates.map(elem => {
          return <DateComponent date={elem} key={elem.date} />;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="content">
        <div className="calendarWrap">
          <div className="title">{"Spring 2020 Calendar"}</div>
          {/* {dateArray !== null ? dateArray : "No dates available."} */}
          <this.DateArray />
        </div>
      </div>
    );
  }
}
