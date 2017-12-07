import React, { Fragment } from "react";
import { Link } from "react-router";
import RouteWithSubRoutes from "../config/RouteWithSubRoutes";
import Nav from "./sections/nav/Nav";

import Home from "./pages/Home";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Nav />
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Fragment>
        );
    }
}
