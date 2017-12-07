import React, { Fragment } from "react";
import { Link } from "react-router";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <a href="/">Home</a>
                <a href="/sub">Sub</a>
            </Fragment>
        );
    }
}
