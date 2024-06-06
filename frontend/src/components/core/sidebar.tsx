import React from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu, sidebarClasses, MenuItemStyles, menuClasses } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { EyeIcon } from "@/components/icons";
import { Badge, Chip } from "@nextui-org/react";

interface Props {}

const Sidebar: React.FC<Props> = () => {
    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: "13px",
            fontWeight: 400,
            // backgroundColor: `hsl(var(--nextui-content1))`,
        },
        icon: {
            color: "blue",
            [`&.${menuClasses.disabled}`]: {
                color: "green",
            },
        },
        SubMenuExpandIcon: {
            color: "#b6b7b9",
        },
        subMenuContent: ({ level }) => ({
            backgroundColor: level === 0 ? `hsl(var(--nextui-content1))` : `hsl(var(--nextui-content2))`,
            // backgroundColor: "yellow",
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                // color: `hsl(var(--nextui-warning-50))`,
                backgroundColor: `hsl(var(--nextui-warning-50))`,
            },
            "&:hover": {
                backgroundColor: `hsl(var(--nextui-content3))`,
                // color: "violet",
            },
            [`&.active`]: {
                backgroundColor: `hsl(var(--nextui-danger-600))`,
                color: "#ffffff",
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };
    return (
        <ProSidebar
            image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: `hsl(var(--nextui-background))`,
                    height: "100vh",
                    overflowY: "auto",
                },
            }}
        >
            {" "}
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="flex-1 mb-8 py-4">
                    <h1 className="text-3xl pl-4 mb-8">ShtIT</h1>
                    <div className="px-6 mb-2">
                        <p className="font-semibold" style={{ opacity: 0.7, letterSpacing: "0.5px" }}>
                            General
                        </p>
                    </div>
                    <Menu menuItemStyles={menuItemStyles}>
                        <SubMenu
                            label="Charts"
                            icon={<EyeIcon />}
                            suffix={
                                <Badge content="5" color="danger" className="mr-4 -mt-0.5">
                                    {""}
                                </Badge>
                            }
                        >
                            <MenuItem> Pie charts</MenuItem>
                            <MenuItem component={<NavLink to="/admin" />}> Admin</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                        <SubMenu label="Components" icon={<EyeIcon />}>
                            <MenuItem> Grid</MenuItem>
                            <MenuItem> Layout</MenuItem>
                            <SubMenu label="Forms">
                                <MenuItem> Input</MenuItem>
                                <MenuItem> Select</MenuItem>
                                <SubMenu label="More">
                                    <MenuItem> CheckBox</MenuItem>
                                    <MenuItem> Radio</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label="E-commerce" icon={<EyeIcon />}>
                            <MenuItem> Product</MenuItem>
                            <MenuItem> Orders</MenuItem>
                            <MenuItem> Credit card</MenuItem>
                        </SubMenu>
                    </Menu>

                    <div className="py-0 px-6 mb-2 mt-8">
                        <p className="font-semibold" style={{ opacity: 0.7, letterSpacing: "0.5px" }}>
                            Extra
                        </p>
                    </div>

                    <Menu menuItemStyles={menuItemStyles}>
                        <MenuItem
                            icon={<EyeIcon />}
                            suffix={
                                <Chip color="success" variant="flat" size="sm">
                                    New
                                </Chip>
                            }
                        >
                            Calendar
                        </MenuItem>
                        <MenuItem icon={<EyeIcon />}>Documentation</MenuItem>
                        <MenuItem disabled icon={<EyeIcon />}>
                            Examples
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </ProSidebar>
    );
};

export default Sidebar;
