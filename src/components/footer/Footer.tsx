import "./Footer.scss";
import { Fade } from "react-reveal";
import { ThemeProps } from "../../Types/ThemeProps.type";
import translate from "../../translate/Translate";

export default function Footer(props: ThemeProps) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {`© 2021 ${translate('FOOTER_TEXT')}`} 
        </p>
      </Fade>
    </div>
  );
}
