import React from "react";

import { Link } from "react-router-dom";

import routes from "../../../config/routes";

class Nav extends React.Component {
    renderlink(route) {
        if (route.routes.length >0) {
            route.routes.forEach(route => {
                this.renderlink(route);
            });
            return <Link key={route.id} to={route.path}>{route.title}</Link>;
        }
    }

    render() {
        return (
            <div>
                {routes.map(route => {
                    return this.renderlink(route
                    );
                })}
            </div>
        );
    }
}

export default Nav;
