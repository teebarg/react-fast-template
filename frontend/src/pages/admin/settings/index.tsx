import React from "react";
import Meta from "@/components/Meta";

interface Props {}

const AdminSettings: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Admin Settings Page" />
            <div className="p-8">Admin Settings</div>
        </React.Fragment>
    );
};

export default AdminSettings;
