import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const RouteWithSubRoutes = route => {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};

export default RouteWithSubRoutes;
