import { FC } from "react";
import { PathRouteProps } from "react-router-dom";

import { IconSvgProps } from "@/types";

enum Pages {
    Welcome,
    Page1,
    Page2,
    Page3,
    Page4,
    Login,
    NotFound,
    Landing,
}

type PathRouteCustomProps = {
    title?: string;
    component: FC;
    icon?: FC<IconSvgProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
