import React from "react";
import TBONavbar from "@/pages/tbo/components/navbar";
import Meta from "@/components/Meta";
import { Button, Image } from "@nextui-org/react";
import { LocationIcon, MailIcon } from "nui-react-icons";
import ContactForm from "./components/contact-form";
import { Fade } from "react-awesome-reveal";
import { openingHours, products } from "./data";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import { ProductItem } from "./components/product-item";
import { Banner } from "./components/banner";
import { imgSrc } from "@/utils/util";

interface Props {}

const Landing: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Children clothing" />
            <Banner />
            <div className="flex items-center justify-center">
                <div className="flex w-full items-center gap-x-3 border-b-1 border-divider bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100 px-6 py-2 sm:px-3.5 sm:before:flex-1">
                    <p className="text-small text-foreground">
                        <Link className="text-medium no-underline text-inherit" to={"/tbo"} role="link">
                            GET FREE SHIPPING ON ₦20,000+ View Details
                        </Link>
                    </p>
                    <div className="flex flex-1 justify-end"></div>
                </div>
            </div>
            <TBONavbar />
            <div>
                <div>
                    <div className="max-w-7xl mx-auto relative sm:flex sm:flex-row-reverse bg-[#fee3f1] rounded-xl my-4 sm:my-8 min-h-72">
                        <div className="sm:w-1/2">
                            <Image src={imgSrc(`banners%2Fhero4.webp`)} className="w-full" radius="none" />
                        </div>
                        <div className="sm:w-1/2 sm:flex flex-col items-center justify-center text-gray-600 py-8 sm:py-0 px-2 sm:px-0">
                            <Fade cascade damping={0.5}>
                                <h1 className="text-5xl font-semibold">Explore thrifts for kids</h1>
                                <Fade cascade damping={0.1}>
                                    We are obsessed with colourful drip
                                </Fade>
                                <p className="text-2xl font-medium mt-1">{`Discover affordable children's thrifts in Lagos`}</p>
                                <div className="gap-4 mt-6">
                                    <Button size="lg" className="px-4 py-2 min-w-36 bg-slate-50 text-inherit">
                                        Shop Now
                                    </Button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="bg-default-100">
                    <div className="max-w-7xl mx-auto relative py-8 min-h-48">
                        <Image src={imgSrc(`banners%2Fbanner1.avif`)} className="h-auto w-full" />
                        <div className="flex flex-wrap mt-2 sm:mt-0 mx-auto sm:absolute bottom-16 right-4 gap-2 ml-auto z-10">
                            <Button size="lg" variant="flat" className="min-w-36">
                                Boy
                            </Button>
                            <Button size="lg" variant="flat" className="min-w-36">
                                Girl
                            </Button>
                            <Button size="lg" variant="flat" className="min-w-36">
                                Toddler Boy
                            </Button>
                            <Button size="lg" variant="flat" className="min-w-36">
                                Toddler Boy
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-default-50">
                    <div className="max-w-6xl mx-auto relative py-8 px-4 md:px-0">
                        <p className="text-lg uppercase text-primary mb-2 font-medium">Collections</p>
                        <div className="md:grid grid-cols-2 gap-4">
                            <div className="md:grid grid-cols-2 gap-4">
                                <Image radius="none" src="/cat1.jpeg" />
                                <Image src="/cat2.jpeg" />
                                <Image src="/cat4.jpeg" />
                                <Image src="/cat3.jpeg" />
                            </div>
                            <div className="">
                                <Image src="/cat5.avif" className="h-[inherit]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-default-50">
                    <div className="max-w-7xl mx-auto relative py-8 px-4 md:px-0">
                        <p className="text-lg uppercase text-primary mb-2 font-medium">Trending</p>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            {products.slice(0, 4).map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="bg-default-50 flex items-center">
                    <div className="sm:flex flex-row-reverse max-w-5xl mx-auto py-4 sm:py-16 gap-4">
                        <div className="sm:w-1/2 sm:pl-16 sm:pr-8">
                            <Fade cascade damping={0.1}>
                                <Image
                                    isZoomed
                                    alt="Sidebanner image"
                                    className="rounded-none max-h-80"
                                    src={imgSrc(`banners%2Fsidebanner.jpeg`)}
                                />
                            </Fade>
                        </div>
                        <div className="sm:w-1/2 sm:flex flex-col justify-center text-left px-8 mt-6 sm:mt-0">
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
                    </div>
                </div> */}
                <div className="bg-default-100">
                    <div className="max-w-7xl mx-auto relative py-8 min-h-48">
                        <Image src={imgSrc(`banners%2Fbanner2.avif`)} className="h-auto w-full" />
                        <div className="flex flex-wrap sm:absolute bottom-16 left-4 gap-2 ml-auto z-10 mt-4 sm:mt-0 px-4 sm:px-0">
                            <Button size="lg" variant="flat" className="min-w-36">
                                Shorts
                            </Button>
                            <Button size="lg" variant="flat" className="min-w-36">
                                Tops
                            </Button>
                            <Button size="lg" variant="flat" className="min-w-36">
                                Shoes
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-default-100 py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <p className="text-primary font-medium">OUR SERVICES</p>
                        <p className="text-3xl font-semibold">Find the best thrifts for your kids</p>
                        <p className="text-default-700">
                            {`We provide a curated selection of children's thrifts, ensuring top quality at unbeatable prices. Discover a variety of
                            items including clothes, shoes, and accessories for your little ones.`}
                        </p>
                        <div className="grid sm:grid-cols-4 gap-8 mt-6">
                            {products.slice(4, 8).map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-fixed bg-center" style={{ backgroundImage: `url("/hero3.jpeg")` }}>
                    <div className="flex items-center h-full backdrop-blur-smp backdrop-saturate-150p bg-white/10p">
                        <div className="max-w-5xl mx-auto sm:flex gap-8 py-16 sm:px-2">
                            <div className="sm:w-1/2 sm:pr-10 backdrop-blur bg-white/60 p-4 sm:p-8 rounded-lg shadow-lg shadow-gray-400">
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
                            <div className="sm:w-1/2 backdrop-blur bg-white/60 p-4 sm:p-8 rounded-lg text-gray-800 mt-6 sm:mt-0">
                                <div>
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
                <div className="bg-gray-200">
                    <div className="max-w-5xl mx-auto py-8">
                        <p className="text-lg font-medium text-primary mb-4 ml-2 sm:ml-0">OUR LOCATION</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.7044697975375!2d3.3243740696178534!3d6.66947613161211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b96bc12c94145%3A0xce8a5a69dcdc4350!2s8%20Agbado%20Oke%20Aro%20Road%2C%20Ifako-Ijaiye%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718193637813!5m2!1sen!2sng"
                            height="450"
                            style={{ border: 0, width: "100%", borderRadius: "2%" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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
