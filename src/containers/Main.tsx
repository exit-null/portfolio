import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Splash from "../components/splash/Splash";
import { ThemeProps } from "../Types/ThemeProps.type";

class Main extends React.Component<ThemeProps> {
    
    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Splash />}
                    />
                    <Route
                        path="/portfolio"
                        render={(props) => <Home {...props} theme={this.props.theme}/>}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;