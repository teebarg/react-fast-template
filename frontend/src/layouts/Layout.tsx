import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

const Layout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;
