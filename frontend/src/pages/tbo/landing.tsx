import React from "react";
import TBONavbar from "@/pages/tbo/components/navbar";
import Meta from "@/components/Meta";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { LocationIcon, MailIcon } from "@/components/icons";
import ContactForm from "./components/contact-form";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { CategoryInterface, categories, openingHours } from "./data";
import Footer from "./components/footer";
import Header from "@/sections/Header";

interface Props {}

const Landing: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Children clothing" />
            <TBONavbar />
            <Header />
            <div>
                <div className="bg-fixed bg-center bg-cover h-[80vh]" style={{ backgroundImage: `url("/landing.jpeg")` }}>
                    <div className="flex items-center h-full bg-black bg-opacity-50">
                        <div className="min-w-[52rem] max-w-5xl mx-auto">
                            <Fade cascade damping={0.5}>
                                <h1 className="text-7xl font-semibold text-white">Explore thrifts for kids</h1>
                                <Fade cascade damping={0.1}>
                                    Each character will appear one by one
                                </Fade>
                                <p className="text-2xl font-medium text-white mt-1">{`Discover affordable children's thrifts in Lagos`}</p>
                                <div className="flex gap-4 mt-6">
                                    <Button color="primary" size="lg" className="px-4 py-2">
                                        Shop Now
                                    </Button>
                                    <Button color="secondary" size="lg" className="px-4 py-2">
                                        Learn More
                                    </Button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="bg-default-50 flex items-center">
                    <div className="flex max-w-5xl mx-auto py-16 gap-4">
                        <div className="w-1/2 flex flex-col justify-center text-left px-8">
                            <Slide>
                                <p className="text-primary font-medium">DISCOVER THRIFTS FOR KIDS</p>
                                <p className="text-3xl font-semibold mt-1">{`Quality children's thrifts at affordable prices in Lagos`}</p>
                                <div className="text-default-500 mt-1">
                                    {`At ThriftwithOba, we specialize in selling high-quality children's thrifts, including clothes, shoes, and more.
                                Located in Lagos, we offer a wide range of affordable options for your little ones.`}
                                </div>
                                <p className="mt-6 underline">Get in touch</p>
                            </Slide>
                        </div>
                        <div className="w-1/2 pl-16 pr-8">
                            <Slide direction="right">
                                <Image isZoomed alt="NextUI Fruit Image with Zoom" src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" />
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="bg-default-100 py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <p className="text-primary font-medium">OUR SERVICES</p>
                        <p className="text-3xl font-semibold">Find the best thrifts for your kids</p>
                        <p className="text-default-700">
                            {`We provide a curated selection of children's thrifts, ensuring top quality at unbeatable prices. Discover a variety of
                            items including clothes, shoes, and accessories for your little ones.`}
                        </p>
                        <div className="grid grid-cols-3 gap-8 mt-6">
                            {categories.map((item: CategoryInterface, index: number) => (
                                <Zoom key={index}>
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
                                </Zoom>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("/hero2.webp")` }}>
                    <div className="flex items-center h-full backdrop-blur-sm backdrop-saturate-150p bg-white/10p">
                        {/* <div className="flex items-center h-full bg-black bg-opacity-50 backdrop-blur backdrop-saturate-150p bg-white/20"> */}
                        <div className="max-w-5xl mx-auto flex gap-16 py-16 px-2">
                            <div className="w-1/2 pr-10 backdrop-blur bg-white/60 p-8 rounded-lg shadow-lg shadow-gray-400">
                                <p className="text-lg font-medium text-primary">GET IN TOUCH</p>
                                <p className="text-2xl font-semibold text-gray-900">Reach out to us for more information</p>
                                <p className="text-gray-700">
                                    For inquiries or to place an order, contact us today. We are here to assist you with any questions you may have
                                    about our products and services.
                                </p>

                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="w-1/2 backdrop-blur bg-white/60 p-8 rounded-lg text-gray-900">
                                <div className="">
                                    <p className="font-semibold mt-4 text-xl">Get in touch</p>
                                    <div className="flex gap-2">
                                        <MailIcon />
                                        <p>obathrift@gmail.com</p>
                                    </div>
                                    <p className="font-semibold mt-6 text-xl">Location</p>
                                    <div className="flex gap-2">
                                        <LocationIcon />
                                        <p className="underline">Lagos, LA NG</p>
                                    </div>
                                    <p className="font-semibold mt-6 text-xl">Hours</p>
                                    <div>
                                        {openingHours.map((hour, index) => (
                                            <div key={index} className="grid grid-cols-3">
                                                <p className="">{hour.day}</p>
                                                <p className="col-span-2">{hour.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
