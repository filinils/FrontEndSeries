import * as React from "react";
import Link from "react-router-dom";

import { Fragment } from "react";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Link to={"/"}>{"Home"}</Link>
                <Link to={"/sub"}>{"Sub"}</Link>
            </Fragment>
        );
    }
}
