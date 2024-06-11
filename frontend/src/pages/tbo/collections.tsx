import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import { CollectionsSideBar } from "./components/sidebar";

interface ComponentProps {}

const Collections: React.FC<ComponentProps> = () => {
    return (
        <div className="max-w-8xl h-full w-full px-2 lg:px-24 py-4">
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Music</BreadcrumbItem>
                <BreadcrumbItem>Artist</BreadcrumbItem>
                <BreadcrumbItem>Album</BreadcrumbItem>
                <BreadcrumbItem>Song</BreadcrumbItem>
            </Breadcrumbs>
            <div className="flex gap-6 mt-4">
                <CollectionsSideBar />
                <div className="w-full flex-1 flex-col">
                    <p>Sidebar</p>
                </div>
            </div>
        </div>
    );
};

export { Collections };
