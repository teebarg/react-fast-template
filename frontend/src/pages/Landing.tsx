import React from "react";

interface Props {}

const Landing: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <div>
                <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: `url("/landing.jpeg")` }}>
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <h1 className="text-white text-4xl">Welcome to My Site</h1>
                    </div>
                </div>
                <div className="h-screen bg-gray-100 flex items-center justify-center">
                    <p className="text-2xl">Scroll down to see more content.</p>
                </div>
                <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: `url("/landing.jpeg")` }}>
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <h1 className="text-white text-4xl">Welcome to My Site</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
