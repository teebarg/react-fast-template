import { Link } from "react-router-dom";

import Meta from "@/components/Meta";
import { Button } from "@nextui-org/react";

function Page4() {
    return (
        <>
            <Meta title="page 4" />
            <div className="column-center">
                <h3>Page 4</h3>
                <Button to={`/${Math.random().toString()}`} as={Link} variant="bordered" size="sm" color="warning">
                    Whant to check 404?
                </Button>
            </div>
        </>
    );
}

export default Page4;
