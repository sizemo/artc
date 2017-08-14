import React, {Component} from 'react';
import './Calendar.css';


class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <div className="container-fluid">
          <div className="embed-responsive embed-responsive-4by3 hidden-sm-down">
            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=bug8mt2ki8cu2ms714euief6q4%40group.calendar.google.com&amp;color=%23800000&amp;ctz=America%2FNew_York" 
              className="calendar-full">
            </iframe>
          </div>
          <div className="hidden-md-up">
            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;mode=AGENDA&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=bug8mt2ki8cu2ms714euief6q4%40group.calendar.google.com&amp;color=%23800000&amp;ctz=America%2FNew_York" 
              className="calendar-mobile">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;