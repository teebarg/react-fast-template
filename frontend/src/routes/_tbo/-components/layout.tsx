import React from "react";
import Footer from "./footer";
import { Banner } from "./banner";
import { Outlet } from "@tanstack/react-router";

interface Props {}

const Layout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Banner />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
