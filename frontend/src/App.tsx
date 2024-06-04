import { Fragment } from "react";

import { withErrorHandler } from "@/error-handling";
import AppErrorBoundaryFallback from "@/error-handling/fallbacks/App";
import Pages from "@/routes/Pages";
// import Header from "@/sections/Header";
import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";
import Navbar from "@/components/navbar";
import Footer from "@/sections/Footer";

function App() {
    return (
        <Fragment>
            <Notifications />
            <HotKeys />
            <SW />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    <Pages />
                </main>
                <Footer />
            </div>
        </Fragment>
    );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
