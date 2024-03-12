import { RouteObject } from "react-router-dom";
import Home from "..";

const homePage: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    }
]

export { homePage }