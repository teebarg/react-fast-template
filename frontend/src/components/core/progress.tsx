import { Progress as NUIProgress } from "@nextui-org/react";

interface Props {}

const Progress: React.FC<Props> = () => {
    return <NUIProgress size="sm" isIndeterminate aria-label="Loading..." className="" color="secondary" />;
};

export { Progress };
