"use client";

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";

export default function UserDropDown() {
    const session: any = {};
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: session?.user?.image || "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description={session?.user?.email}
                    name={session?.user?.name}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="user" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@{session?.user?.email}</p>
                </DropdownItem>

                <DropdownItem key="admin">
                    <a href="/admin">Admin</a>
                </DropdownItem>
                <DropdownItem key="profile">
                    <a href="/profile">Profile</a>
                </DropdownItem>
                <DropdownItem key="settings">
                    <a href="/admin/settings">Settings</a>
                </DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
