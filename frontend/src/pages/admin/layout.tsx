import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/core/sidebar";
import AdminNavbar from "@/components/admin-navbar";

interface Props {}

const AdminLayout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <div className="flex min-h-screen">
                <div className="hidden sm:block min-w-[20rem] h-screen overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1 h-screen overflow-y-auto">
                    <AdminNavbar />
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export default AdminLayout;
