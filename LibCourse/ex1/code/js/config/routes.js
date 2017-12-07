import App from "./../components/App";
import Home from "./../components/pages/Home";
import Footer from "./../components/sections/footer/Footer";

const routes = [
    {
        id: 1,
        path: "/",
        title: "App",
        component: App,
        routes: [
            {
                id: 2,
                path: "/Home",
                component: Home,
                title: "Home",
                routes: []
            }
        ]
    }
];

export default routes;
