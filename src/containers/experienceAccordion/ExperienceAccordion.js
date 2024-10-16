import React, { Component } from "react";
import "./ExperienceAccordion.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { experience } from "../../portfolio.js";
// import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
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
          {experience.sections[0].experiences.map((exp) => {
            return <DegreeCard degree={exp} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;
