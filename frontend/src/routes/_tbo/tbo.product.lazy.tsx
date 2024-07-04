import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

interface Props {}
const Product: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <div>
                <iframe
                    src="https://template.niyi.com.ng/product/7"
                    title="Product Page"
                    style={{ minHeight: "70vh", height: "100%" }}
                    allowFullScreen
                    className="w-full"
                ></iframe>
            </div>
        </React.Fragment>
    );
};

export const Route = createLazyFileRoute("/_tbo/tbo/product")({
    component: Product,
});
