const currency = (number: number): string => {
    return number.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
};

const imgSrc = (image: string): string => {
    return `${import.meta.env.VITE_IMAGE_URL}/${image}?alt=media`;
};

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export { imgSrc, capitalize, currency };
