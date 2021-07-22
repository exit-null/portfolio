import React from "react";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";
import { ThemeProps } from "../Types/ThemeProps.type";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default class Home extends React.Component<ThemeProps> {

    render() {
        return (
            <>
                <Header {...this.props} />
                <Greeting {...this.props} />
                <Skills {...this.props} />
                <Footer {...this.props} />
            </>
        );
    }
}