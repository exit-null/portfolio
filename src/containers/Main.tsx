import React from "react";
import { Theme } from "../Types/Theme.type";

type Props = {
    theme: Theme
}

class Main extends React.Component<Props> {
    render() {
        return "this is working";
    }
}

export default Main;