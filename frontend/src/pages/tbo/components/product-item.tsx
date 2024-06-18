import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import type { Product } from "../data";
import { StarIcon } from "@/components/icons";
import { useNavigate } from "react-router-dom";

interface ComponentProps {
    product: Product;
}

const ProductItem: React.FC<ComponentProps> = ({ product }) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/tbo/product");
    };
    return (
        <Card shadow="sm" isPressable onPress={handleNavigation}>
            <CardBody className="overflow-visible p-0">
                <Button isIconOnly className="absolute right-5 top-5 z-20 rounded-full bg-default/40 text-default-foreground min-w-8 w-8 h-8">
                    <StarIcon className="text-default-500" role="img" size={16} />
                </Button>
                <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={product.title}
                    className="w-full object-cover h-[300px]"
                    src={product.img}
                />
            </CardBody>
            <CardFooter className="block">
                <div className="flex gap-1">
                    <p className="text-xl text-[#C8102E]">{product.price}</p>
                    {product.oldPrice && <p className="text-default-500 line-through">{product.oldPrice}</p>}
                </div>
                <div className="flex text-small justify-between mt-2">
                    <p className="font-medium text-default-700 text-base">{product.title}</p>
                    {product.rating && (
                        <div className="flex items-center">
                            <StarIcon className="text-default-500" role="img" size={16} />
                            <p>{product.rating}</p>
                        </div>
                    )}
                </div>
                <p className="text-left text-small text-default-500">{product.desc ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
                <Button color="primary" variant="shadow" className="w-full mt-3 h-12">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export { ProductItem };
