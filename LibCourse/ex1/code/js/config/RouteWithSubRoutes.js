import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router";
const RouteWithSubRoutes = route => {
    let element = (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
    return element;
};

export default RouteWithSubRoutes;
