import React from "react";
import Meta from "@/components/Meta";
import { Image } from "@nextui-org/react";

interface Props {}

const AdminHomepage: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Homepage" />
            <div className="bg-content1 px-6">
                <div className="max-w-2xl mx-auto py-8">
                    <div className="text-center relative">
                        <h1 className="text-4xl font-bold tracking-tight text-default-700 font-display">
                            The fast, easy way to{" "}
                            <span className="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">develop</span> apps and
                            websites
                        </h1>
                        <p className="mt-6 text-lg text-default-500">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                            occaecat fugiat aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam cum cupiditate quasi
                            dolor nulla explicabo, similique sit reprehenderit quisquam numquam delectus? Consequuntur natus sapiente quidem fugit
                            deserunt nam perferendis?
                        </p>
                        <div className="relative max-w-7xl w-auto h-[500px] mt-4">
                            <Image isZoomed src="/hero.jpg" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AdminHomepage;
