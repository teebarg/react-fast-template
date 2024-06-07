import React from "react";
import TBONavbar from "@/pages/tbo/components/navbar";
import Meta from "@/components/Meta";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { LocationIcon, MailIcon } from "@/components/icons";
import ContactForm from "./components/contact-form";

interface Props {}

interface Item {
    title: string;
    description: string;
    image: string;
    link: string;
}

const items: Item[] = [
    {
        title: "Children's Clothing",
        description: "Find the best thrifts for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        link: "/children-clothing",
    },
    {
        title: "Children's Shoes",
        description: "Discover a variety of shoes for your little ones",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg",
        link: "/children-shoes",
    },
    {
        title: "Children's Accessories",
        description: "Explore a wide range of accessories for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg",
        link: "/children-accessories",
    },
    {
        title: "Children's Toys",
        description: "Find the best toys for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        link: "/children-toys",
    },
    {
        title: "Children's Gadget",
        description: "Find the best toys for your kids",
        image: "https://nextui.org/images/card-example-6.jpeg",
        link: "/children-toys",
    },
    {
        title: "Children's Toys",
        description: "Find the best toys for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
        link: "/children-toys",
    },
];

const hours = [
    {
        day: "Monday",
        time: "9:00am - 10:00pm",
    },
    {
        day: "Tuesday",
        time: "9:00am - 10:00pm",
    },
    {
        day: "Wednesday",
        time: "9:00am - 10:00pm",
    },
    {
        day: "Thursday",
        time: "9:00am - 10:00pm",
    },
    {
        day: "Friday",
        time: "9:00am - 10:00pm",
    },
    {
        day: "Saturday",
        time: "9:00am - 6:00pm",
    },
    {
        day: "Sunday",
        time: "9:00am - 12:00pm",
    },
];

const Landing: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Children clothing" />
            <TBONavbar />
            <div>
                <div className="bg-fixed bg-center bg-cover h-[80vh]" style={{ backgroundImage: `url("/landing.jpeg")` }}>
                    <div className="flex items-center h-full bg-black bg-opacity-50">
                        <div className="min-w-[52rem] max-w-5xl mx-auto">
                            <h1 className="text-7xl font-semibold text-white">Explore thrifts for kids</h1>
                            <p className="text-2xl font-medium text-white mt-1">Discover affordable children's thrifts in Lagos</p>
                            <div className="flex gap-4 mt-6">
                                <Button color="primary" size="lg" className="px-4 py-2">
                                    Shop Now
                                </Button>
                                <Button color="secondary" size="lg" className="px-4 py-2">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-content1 flex items-center">
                    <div className="flex max-w-6xl mx-auto py-8 gap-4">
                        <div className="w-1/2 flex flex-col justify-center text-left px-8">
                            <p className="text-primary font-medium">DISCOVER THRIFTS FOR KIDS</p>
                            <p className="text-3xl font-semibold mt-1">Quality children's thrifts at affordable prices in Lagos</p>
                            <div className="text-default-500 mt-1">
                                At ThriftwithOba, we specialize in selling high-quality children's thrifts, including clothes, shoes, and more.
                                Located in Lagos, we offer a wide range of affordable options for your little ones.
                            </div>
                            <p className="mt-6 underline">Get in touch</p>
                        </div>
                        <div className="w-1/2 pl-16 pr-6">
                            <Image
                                isZoomed
                                // width={240}
                                alt="NextUI Fruit Image with Zoom"
                                src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-content3 py-16">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-primary font-medium">OUR SERVICES</p>
                        <p className="text-3xl font-semibold">Find the best thrifts for your kids</p>
                        <p className="text-default-700">
                            We provide a curated selection of children's thrifts, ensuring top quality at unbeatable prices. Discover a variety of
                            items including clothes, shoes, and accessories for your little ones.
                        </p>
                        <div className="grid grid-cols-3 gap-8 mt-6">
                            {items.map((item: Item, index: number) => (
                                <Card key={index} isFooterBlurred className="w-full h-[400px]">
                                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                                    </CardHeader>
                                    <Image
                                        isZoomed
                                        removeWrapper
                                        alt="Card example background"
                                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                        src={item.image}
                                    />
                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                        <div>
                                            <p className="text-black text-tiny">Available soon.</p>
                                            <p className="text-black text-tiny">Get notified.</p>
                                        </div>
                                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                                            Notify Me
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("/hero2.webp")` }}>
                    <div className="flex items-center h-full bg-black bg-opacity-50 backdrop-blur backdrop-saturate-150 bg-white/20">
                        <div className="max-w-6xl mx-auto flex gap-16 py-16 px-2">
                            <div className="w-1/2 pr-10">
                                <p className="text-lg font-medium text-primary">GET IN TOUCH</p>
                                <p className="text-2xl font-semibold">Reach out to us for more information</p>
                                <p className="text-default-800">
                                    For inquiries or to place an order, contact us today. We are here to assist you with any questions you may have
                                    about our products and services.
                                </p>

                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="rounded-md p-8 ">
                                    <p className="font-semibold mt-4">Get in touch</p>
                                    <div className="flex gap-2">
                                        <MailIcon />
                                        <p>obathrift@gmail.com</p>
                                    </div>
                                    <p className="font-semibold mt-6">Location</p>
                                    <div className="flex gap-2">
                                        <LocationIcon />
                                        <p className="underline">Lagos, LA NG</p>
                                    </div>
                                    <p className="font-semibold mt-6">Hours</p>
                                    <div>
                                        {hours.map((hour, index) => (
                                            <div key={index} className="grid grid-cols-5">
                                                <p className="col-span-1">{hour.day}</p>
                                                <p className="col-span-4">{hour.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
