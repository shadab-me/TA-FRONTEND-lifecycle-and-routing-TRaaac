import React from "react";
import clocks from "../config/data";
import moment from "moment";
import "moment-timezone";
import Clock from "../components/Clock";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClock: 3,
      time: new Date(),
    };
  }

  updateClock = setInterval(() => {
    this.setState({
      time: new Date(),
    });
  }, 1000);

  addClock = () => {
    if (this.state.numberOfClock < clocks.length) {
      this.setState({
        numberOfClock: this.state.numberOfClock + 1,
      });
    }
  };
  removeClock = () => {
    if (this.state.numberOfClock > 0) {
      this.setState({
        numberOfClock: this.state.numberOfClock - 1,
      });
    }
  };
  componentWillUnmount() {
    clearInterval(this.updateClock);
  }
  render() {
    return (
      <div className="container">
        <div className="clocks d-flex justify-content-between flex-wrap">
          {clocks.slice(0, this.state.numberOfClock).map((clock) => {
            return (
              <Clock
                time={moment(this.state.time)
                  .tz(clock.tz)
                  .format("YYY-MM-DD HH:mm:ss")}
                location={clock.city}
                key={clock.id}
              />
            );
          })}
        </div>
        <div className="controls block-center  d-flex justify-content-center mt-5">
          <button
            className="btn btn-danger p-5 text-center"
            onClick={this.removeClock}
          >
            -
          </button>
          <button
            className="btn btn-primary p-5 text-center"
            onClick={this.addClock}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
