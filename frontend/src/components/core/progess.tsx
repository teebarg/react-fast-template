import { Progress as NUIProgress } from "@nextui-org/react";

interface Props {}

const Progess: React.FC<Props> = () => {
    return <NUIProgress size="sm" isIndeterminate aria-label="Loading..." className="" color="secondary" />;
};

export { Progess };
