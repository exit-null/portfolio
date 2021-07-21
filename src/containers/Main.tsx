import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "../components/splash/Splash";
import { Theme } from "../Types/Theme.type";

type Props = {
    theme: Theme
}

class Main extends React.Component<Props> {
    
    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Splash />}
                    />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;