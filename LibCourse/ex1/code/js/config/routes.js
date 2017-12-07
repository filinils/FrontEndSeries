import App from "./../components/App";
import Home from "./../components/pages/Home";
import Footer from "./../components/sections/footer/Footer";
import Cart from "./../components/sections/Cart";
import Products from "./../components/pages/Products";

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
            },
            {
                id: 2,
                path: "/Products",
                component: Products,
                title: "Products",
                routes: []
            }
        ]
    },
    {
        id: 5,
        path: "/",
        title: "Cart",
        component: Cart,
        routes: []
    }
];

export default routes;
