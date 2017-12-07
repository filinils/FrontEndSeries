import React from "react";

import { Link } from "react-router-dom";

import routes from "../../../config/routes";

const el = <div />;

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.links = [];

        this.el = <div />;
        let el = <div />;
    }
    renderLinks(route, isFirst) {
        if (isFirst) this.links = [];
        this.links.push(
            <Link key={route.id} to={route.path}>
                {route.title}
            </Link>
        );

        if (route.routes.length > 0) {
            route.routes.forEach(route => {
                this.renderLinks(route);
            });
        }
        return this.links;
    }

    render() {
        return (
            <div>
                {this.el}
                {routes.map(route => {
                    return this.renderLinks(route, true).map(link => {
                        return <link.type {...link.props} />;
                    });
                })}
            </div>
        );
    }
}

export default Nav;
