import React, { Component } from "react";
import CarouselAuto from "./images/CarouselAuto.png";
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./ClothingDisplay.css";

class ClothingDisplay extends Component {
  render() {
    return (
        
    <div className="container clothesScroll">
        <div className="clearfix">
        <div className="card-body p-0 col-lg-3 border border-dark">
             <div
        className="parent"
        style={{
          height: "500px",
          width: "272px",
          position: "relative",
          overflow: "auto",
          padding: "0"
        }}
      >
        <div style={{ height: "1000px", padding: "0" }}>
          <Draggable
            axis="y"
            bounds={(0, 10, 0, 10)}
            handle=".handle"
            grid={(25, 25)}
            allowAnyClick={true}
            disabled={true}
          >
            <img src={CarouselAuto} alt="" style={{height:2500, width:250}}/>
          </Draggable>
          <FontAwesomeIcon
            icon={faChevronUp}
            size="1x"
            className="plusIcon2"
            onMouseOver={this.arrow}
          />
            </div>
            </div>
        </div>
        </div>
    </div>);
  }
}

export default ClothingDisplay;
