interface CategoryInterface {
    title: string;
    description: string;
    image: string;
    link: string;
}

const categories: CategoryInterface[] = [
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

export type { CategoryInterface };
export { categories, openingHours };
