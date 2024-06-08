import React from "react";
import Meta from "@/components/Meta";
import { getUserById } from "../homepage/data";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Chip, Image } from "@nextui-org/react";

interface Props {}

const User: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { id } = useParams<"id">();
    const user = getUserById(Number(id));

    if (!user) {
        navigate(-1);
    }

    return (
        <React.Fragment>
            <Meta title="User" />
            <div>
                <div className="max-w-7xl mx-auto bg-content1 p-8 rounded-md shadow-md shadow-fuchsia-200 mt-6">
                    <h1 className="text-2xl font-semibold mb-2">User:</h1>
                    {user && (
                        <div>
                            <Image width={300} alt="NextUI hero Image" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                            <div className="mt-4 flex gap-2 items-center">
                                Name: <span className="text-lg"> {user.name}</span>{" "}
                                <Chip color={user.role == "admin" ? "warning" : "secondary"} variant="bordered" size="sm">
                                    {user.role == "admin" ? "Admin" : "Member"}
                                </Chip>
                            </div>
                            <p>
                                Email: <span className="text-lg mr-2"> {user.email}</span>
                            </p>
                            <p>
                                Role: <span className="text-lg">{user.role}</span>
                            </p>
                            <p>
                                Date: <span className="text-lg">{user.createdAt}</span>
                            </p>
                        </div>
                    )}
                    <Button color="secondary" onClick={() => navigate(-1)} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default User;
