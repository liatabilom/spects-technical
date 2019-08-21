import React, { Component } from "react";
import "./Test.css";

class Test extends Component {
  state = {
    isSwitchOn: false
  };
  render() {
    const isOn = this.state.isSwitchOn;
    return (
      <div>
        <div className="col-sm-4 col-sm-4-offset-4">
          <div
            className={isOn ? "square switch-on" : "square switch-off"}
            onClick={() => this.setState({ isSwitchOn: !isOn })}
          >
            {isOn ? "On" : "Off"}
          </div>
        </div>
        <div className={isOn ? "bg-light light-on" : "bg-light ligth-off"} />
      </div>
    );
  }
}

export default Test;
