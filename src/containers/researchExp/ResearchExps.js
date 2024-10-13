import React, { Component } from "react";
import "./ResearchExps.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { research_exps } from "../../portfolio";
// import { Fade } from "react-reveal";

class ResearchExps extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        {/* <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div> */}
        <div className="educations-body-div">
          {research_exps.research_exps.map((rexp) => {
            return <DegreeCard degree={rexp} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ResearchExps;
