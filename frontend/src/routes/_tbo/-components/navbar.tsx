"use client";

import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { SearchIcon } from "nui-react-icons";
import UserDropDown from "@/components/user-menu";
import { useAuth } from "@/store/auth-provider";
import type { AuthContextValue } from "@/store/auth-provider";
import { Link } from "@tanstack/react-router";

const TBONavbar = () => {
    const { currentUser } = useAuth() as AuthContextValue;
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100 min-w-[500px] lg:min-w-[500px] rounded-full",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
            type="search"
        />
    );

    return (
        <NextUINavbar maxWidth="full" position="sticky" className="my-2">
            <NavbarContent className="basis-1/5 sm:basis-full flex" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <Link className="flex justify-start items-center gap-1" to="/tbo">
                        <Logo />
                        <p className="font-bold text-inherit text-2xl">TBO</p>
                    </Link>
                </NavbarBrand>
                <div className="hidden sm:flex gap-2 text-sm">
                    {[
                        { name: "Home", to: "/" },
                        { name: "About", to: "/" },
                        { name: "Services", to: "/" },
                        { name: "Collections", to: "/tbo/collections" },
                        { name: "Checkout", to: "/tbo/checkout" },
                    ].map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link className="[&.active]:test-danger" to={item.to}>
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    {currentUser ? (
                        <UserDropDown />
                    ) : (
                        <Link to="/login" className="text-sm font-semibold leading-6">
                            Log In <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </NavbarItem>
                <NavbarMenuToggle className="sm:hidden" />
            </NavbarContent>
            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index: number) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="[&.active]:test-danger" to={item.href}>
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};

export default TBONavbar;
