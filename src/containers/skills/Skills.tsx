import "./Skills.scss";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { ThemeProps } from "../../Types/ThemeProps.type";

export default function Skills(props: ThemeProps) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
