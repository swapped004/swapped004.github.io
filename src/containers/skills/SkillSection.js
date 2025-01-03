import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import DatabaseImg from "./DatabaseImg";
import LanguagesImg from "./LanguagesImg";
import BackendImg from "./BackendImg";
import DevelopmentImg from "./DevelopmentImg";
import FrontendImg from "./FrontEndImg";
import ForensicsImg from "./ForensicsImg";
import VersionControlImg from "./VersionControlImg";
import MiscImg from "./MiscImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "DatabaseImg")
    return <DatabaseImg theme={props.theme} />;
  else if (props.fileName === "LanguagesImg")
    return <LanguagesImg theme={props.theme} />;
  else if (props.fileName === "BackendImg")
    return <BackendImg theme={props.theme} />;
  else if (props.fileName === "FrontendImg")
    return <FrontendImg theme={props.theme} />;
  else if (props.fileName === "MiscImg") return <MiscImg theme={props.theme} />;
  else if (props.fileName === "VersionControlImg")
    return <VersionControlImg theme={props.theme} />;
  else if (props.fileName === "ForensicsImg")
    return <ForensicsImg theme={props.theme} />;
  else if (props.fileName === "DevelopmentImg")
    return <DevelopmentImg theme={props.theme} />;
  else return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
