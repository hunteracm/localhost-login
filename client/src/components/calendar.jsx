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
    const month =
      date[0] === "1"
        ? "Jan"
        : date[0] === "2"
        ? "Feb"
        : date[0] === "3"
        ? "Mar"
        : date[0] === "4"
        ? "Apr"
        : date[0] === "5"
        ? "May"
        : date[0] === "6"
        ? "Jun"
        : date[0] === "7"
        ? "Jul"
        : date[0] === "8"
        ? "Aug"
        : date[0] === "9"
        ? "Sep"
        : date[0] === "10"
        ? "Nov"
        : date[0] === "11"
        ? "Oct"
        : date[0] === "12"
        ? "Dec"
        : "Unk";
    const name = p.date.name;
    const description = p.date.description;
    // console.log(date[0] + " " + day)
    // console.log(cMonth + " " + cDay)
    // console.log(date[0] < cMonth || (date[0] === cMonth && day < cDay))
    return (
      <div className="meetingDay">
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
          <div className="title">{"This Semester's Calendar"}</div>
          {/* {dateArray !== null ? dateArray : "No dates available."} */}
          <this.DateArray />
        </div>
      </div>
    );
  }
}
