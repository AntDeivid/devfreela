import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/routes-path";

const HomeComponent = lazy(async () => await import("../pages/Home"))

const home = [
    {
        path: ROUTE_PATHS.home,
        component: HomeComponent,
        exact: true
    }
]

export default home;