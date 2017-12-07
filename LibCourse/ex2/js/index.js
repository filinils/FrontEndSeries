import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { loadFooter } from "./actions/footerActions";
import {
    loadHeader,
    loadMegaMenuNavigation,
    loadMegaMenuColumn
} from "./actions/headerActions";
import Header from "./components/sections/header/Header";
import Footer from "./components/sections/footer/Footer";
import configuerStore from "./store/configureStore";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import config from "./config/config";

require("../style/index.scss");

/* To prevent the IIS to IDLE for to long so that you don't have to wait 8min */
setTimeout(() => location.reload(), 1000 * 60 * 10);

const store = configuerStore();

store.dispatch(loadFooter());

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
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById(selector)
    );
};

render(routes, "header");

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/pages/Menu", () => {
        render(header, "header");
    });
}
