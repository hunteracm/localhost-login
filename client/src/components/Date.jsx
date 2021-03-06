import React, { Component } from "react";

export default class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedView: false,
    };
  }

  toggleView = () => {
    // const ps = this.state.expandedView;
    // this.setState({
    //   expandedView: !ps,
    // });
    this.props.select(this.props.id)
  };

  render() {
    const cDay = new Date().getDate();
    const cMonth = new Date().getMonth() + 1;
    const date = this.props.date.date.split("/");
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
    let thatDate = new Date(date[2], date[0] - 1, date[1]);
    const month = monthNames[date[0] - 1].substr(0, 3);
    const name = this.props.date.name;
    const description = this.props.date.description;
    const dayName = dayNames[thatDate.getDay()].substr(0, 3) + (description != "Not determined yet." ? " •" : "");
    return (
      <div
        className={
          this.state.expandedView ? "expandedMeetingDay" : "meetingDay"
        }
        onClick={this.toggleView}
      >
        <div className="">
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
        </div>
        {this.state.expandedView ? (
          <div className="data">
            <div className="dayName">{name}</div>
            <div className="dayDescription">{description}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
