import React from "react";
import "./Header.scss";
import { Fade } from "react-reveal"
import { Link, NavLink } from "react-router-dom";
import { style } from "glamor";
import { ThemeProps } from "../../Types/ThemeProps.type";
import { changeTheme, getThemeIcon, headerNavProps } from "./Helpers";
import translate from "../../translate/Translate";
import { Locale } from "../../translate/LocaleEnum";

export default class Header extends React.Component<ThemeProps> {

  styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        this.props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  render() {
    const { theme } = this.props
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header className="header">
            <NavLink to={'/splash'} className="logo">
              <span style={{ color: theme.text }}></span>
              <span className="logo-name" style={{ color: theme.text }}>
                Sayan.Bnrje()
              </span>
              <span style={{ color: theme.text }}></span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              {headerNavProps.map((headerNavProp) => {
                return (
                  <li>
                    <NavLink
                      className={headerNavProp.className}
                      to={headerNavProp.to}
                      activeStyle={{ fontWeight: "bold" }}
                      style={{ borderRadius: 5, color: theme.text }}>
                      {translate(headerNavProp.translationKey, Locale.english)}
                    </NavLink>
                  </li>
                );
              })}
              <button {...this.styles} onClick={() => changeTheme(theme.name, undefined)}>
                {getThemeIcon(theme.name)}
              </button>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }

}
