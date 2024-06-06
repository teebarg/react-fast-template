import React from "react";
import Meta from "@/components/Meta";

interface Props {}

const Settings: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Admin Settings Page" />
            <div>Admin Settings</div>
        </React.Fragment>
    );
};

export default Settings;
