import React, { Component } from "react";
import datesFile from "./dates.json";
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

  Date = p => {
    const cDay = new Date().getDate();
    const cMonth = new Date().getMonth() + 1;
    const date = p.date.date.split("/");
    const day = date[1];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // year, month (0-11), date (1-31)
    let thatDate = new Date(date[2],date[0] - 1,date[1]);
    const month = monthNames[date[0] - 1].substr(0,3);
    const dayName = dayNames[thatDate.getDay()].substr(0,3);
    const name = p.date.name;
    const description = p.date.description;
    return (
      <div className="meetingDay">
        <div className="calendarDay">{dayName}</div>
        <div className="calendarDate">{day}</div>
        <div
          className={
            date[0] < cMonth || (date[0] == cMonth && day < cDay)
              ? "calendarMonthInactive"
              : "calendarMonth"
          }
        >
          {month}
        </div>
        {/* <div className="calendarDate">{name}</div>
        <div className="calendarDate">{description}</div> */}
        {/* {p.props.month} Some way to get month here */}
      </div>
    );
  };

  DateArray = p => {
    return (
      <div className="calendar">
        {datesFile.dates.map(elem => {
          return <this.Date date={elem} key={elem.date} />;
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
