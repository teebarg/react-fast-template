interface CategoryInterface {
    title: string;
    description: string;
    image: string;
    link: string;
    slug: string;
}

const categories: CategoryInterface[] = [
    {
        title: "Children's Clothing",
        description: "Find the best thrifts for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        link: "/children-clothing",
        slug: "children-clothing",
    },
    {
        title: "Children's Shoes",
        description: "Discover a variety of shoes for your little ones",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg",
        link: "/children-shoes",
        slug: "children-shoes",
    },
    {
        title: "Children's Accessories",
        description: "Explore a wide range of accessories for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg",
        link: "/children-accessories",
        slug: "children-accessories",
    },
    {
        title: "Children's Toys",
        description: "Find the best toys for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        link: "/children-toys",
        slug: "children-toys",
    },
    {
        title: "Children's Gadget",
        description: "Find the best toys for your kids",
        image: "https://nextui.org/images/card-example-6.jpeg",
        link: "/children-gadget",
        slug: "children-gadget",
    },
    {
        title: "Children's Toys",
        description: "Find the best toys for your kids",
        image: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
        link: "/children-roy",
        slug: "children-roy",
    },
];

const openingHours = [
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

const indicators = [
    {
        height: "90%",
        dataOn: false,
    },
    {
        height: "30%",
        dataOn: false,
    },
    {
        height: "30%",
        dataOn: true,
    },
    {
        height: "30%",
        dataOn: true,
    },
    {
        height: "89%",
        dataOn: true,
    },
    {
        height: "49%",
        dataOn: true,
    },
    {
        height: "45%",
        dataOn: true,
    },
    {
        height: "37%",
        dataOn: true,
    },
    {
        height: "48%",
        dataOn: true,
    },
    {
        height: "43%",
        dataOn: false,
    },
    {
        height: "69%",
        dataOn: false,
    },
    {
        height: "69%",
        dataOn: false,
    },
    {
        height: "82%",
        dataOn: false,
    },
    {
        height: "43%",
        dataOn: false,
    },
    {
        height: "47%",
        dataOn: false,
    },
    {
        height: "96%",
        dataOn: false,
    },
    {
        height: "31%",
        dataOn: false,
    },
    {
        height: "44%",
        dataOn: false,
    },
    {
        height: "47%",
        dataOn: false,
    },
    {
        height: "51%",
        dataOn: false,
    },
    {
        height: "36%",
        dataOn: false,
    },
    {
        height: "79%",
        dataOn: false,
    },
    {
        height: "99%",
        dataOn: false,
    },
    {
        height: "33%",
        dataOn: false,
    },
    {
        height: "64%",
        dataOn: false,
    },
    {
        height: "53%",
        dataOn: false,
    },
    {
        height: "54%",
        dataOn: false,
    },
    {
        height: "37%",
        dataOn: false,
    },
    {
        height: "89%",
        dataOn: false,
    },
    {
        height: "30%",
        dataOn: false,
    },
    {
        height: "72%",
        dataOn: false,
    },
    {
        height: "54%",
        dataOn: false,
    },
];

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];

const genders = [
    {
        title: "Boys",
        slug: "boys",
    },
    {
        title: "Girls",
        slug: "girls",
    },
    {
        title: "Unisex",
        slug: "unisex",
    },
];

const brands = [
    {
        title: "Puma",
        slug: "puma",
    },
    {
        title: "Adidas",
        slug: "adidas",
    },
    {
        title: "Nike",
        slug: "nike",
    },
    {
        title: "Reebok",
        slug: "reebok",
    },
    {
        title: "Jordan",
        slug: "jordan",
    },
];

const filters = [
    { key: "new", label: "Newest" },
    { key: "low-price", label: "Price: Low to High" },
    { key: "high-price", label: "Price: High to Low" },
    { key: "top-rated", label: "Top Rated" },
    { key: "most-popular", label: "Most Popular" },
];

interface Product {
    title: string;
    img: string;
    price: string;
}

const products: Product[] = [
    {
        title: "Orange",
        img: "https://nextui.org/images/fruit-1.jpeg",
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: "https://nextui.org/images/fruit-2.jpeg",
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: "https://nextui.org/images/fruit-3.jpeg",
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: "https://nextui.org/images/fruit-4.jpeg",
        price: "$5.30",
    },
    {
        title: "Avocado",
        img: "https://nextui.org/images/fruit-5.jpeg",
        price: "$15.70",
    },
    {
        title: "Lemon 2",
        img: "https://nextui.org/images/fruit-6.jpeg",
        price: "$8.00",
    },
    {
        title: "Banana",
        img: "https://nextui.org/images/fruit-7.jpeg",
        price: "$7.50",
    },
    {
        title: "Watermelon",
        img: "https://nextui.org/images/fruit-8.jpeg",
        price: "$12.20",
    },
];

export type { CategoryInterface, Product };
export { categories, openingHours, sizes, indicators, genders, brands, filters, products };
