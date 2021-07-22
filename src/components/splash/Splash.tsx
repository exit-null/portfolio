import React from "react";
import "./Splash.scss";
import { Redirect } from "react-router-dom";

type State = {
  redirect: boolean
}

class Splash extends React.Component<{}, State> {

  constructor() {
    super({});
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({redirect: true})
    }, 4000)
  }

  AnimatedSplash = () => {
    return (
      <div className="logo_wrapper">
        <div className="loading">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.redirect ? 
      <Redirect to="/portfolio" /> : this.AnimatedSplash()
  }
}

export default Splash;
