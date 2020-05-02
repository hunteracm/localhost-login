import React, { Component } from "react";
import datesFile from "./dates.json";
import DateComponent from "./Date";
import "./calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      showOneDate: false,
    };
  }

  componentDidMount() {
    this.setState({
      dates: datesFile,
    });
  }

  selectDate = (id) => {
    this.setState({
      selectedDate: datesFile.dates[id],
      showOneDate: true,
    })
  }

  closeOneDate = () => {
    this.setState({
      showOneDate: false,
    })
  }

  DateArray = p => {
    return (
      <div className="calendar">
        {datesFile.dates.map((elem,i) => {
          return <DateComponent date={elem} key={elem.date} id={i} />;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="content">
        <div className="calendarWrap">
          <div className="title">{"Spring 2020 Calendar"}</div>
          {this.state.showOneDate ? <div className="oneDate">One Date!</div> : null}
          {datesFile.dates[0] !== undefined ? <this.DateArray /> : "No dates available."}
        </div>
      </div>
    );
  }
}
