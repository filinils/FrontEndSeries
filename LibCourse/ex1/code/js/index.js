import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { AppContainer } from "react-hot-loader";
import routes from "./config/routes";
import RouteWithSubRoutes from "./config/RouteWithSubRoutes";
import { Router } from "react-router";

require("../style/index.scss");

const Routes = ({ routes }) => {
    return (
        <Fragment>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Fragment>
    );
};

const render = (Component, selector) => {
    ReactDOM.render(
        <AppContainer>
            <Router history={createBrowserHistory()}>
                <Component routes={routes} />
            </Router>
        </AppContainer>,
        document.getElementById(selector)
    );
};
render(Routes, "app");

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(() => {
        return render(Routes({ routes }), "app");
    });
}
