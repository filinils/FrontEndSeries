import App from "./../components/App";

const routes = [
    {
        path: "/",
        component: App,
        routes: [
            {
                path: "/sub",
                component: App
            }
        ]
    }
];
