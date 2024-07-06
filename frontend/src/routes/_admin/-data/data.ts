import { Pagination } from "@/types";

const users = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@gmail.com",
        is_superuser: true,
        is_active: false,
        created_at: "2021-01-01",
    },
    {
        id: 2,
        firstname: "Jane Doe",
        email: "jane.doe@gmail.com",
        is_superuser: false,
        is_active: false,
        created_at: "2021-01-01",
    },
    {
        id: 3,
        firstname: "Tom Doe",
        email: "tom.doe@gmail.com",
        is_superuser: false,
        is_active: true,
        created_at: "2021-01-01",
    },
    {
        id: 4,
        firstname: "Jerry Doe",
        email: "jerry.doe@yahoo.com",
        is_superuser: true,
        is_active: true,
        created_at: "2021-01-01",
    },
    {
        id: 5,
        firstname: "Anne Doe",
        email: "anne.doe@email.com",
        role: "user",
        status: "active",
        created_at: "2021-01-01",
    },
];

const pagination: Pagination = {
    page: 1,
    per_page: 5,
    total_count: 6,
    total_pages: 2,
};

const getUserById = (id: number) => {
    return users.find((user) => user.id === id);
};

export { users, pagination, getUserById };
