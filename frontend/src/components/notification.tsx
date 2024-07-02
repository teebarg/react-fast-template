import { useWebSocket } from "@/hooks/use-websocket";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    Divider,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    ScrollShadow,
} from "@nextui-org/react";
import { NotificationIcon } from "nui-react-icons";
import React, { useEffect } from "react";

interface Props {}

const Notification: React.FC<Props> = () => {
    const { messages, connect, disconnect } = useWebSocket({ type: ["registration"] });
    const id = "nK12eRTbo";

    useEffect(() => {
        const domain = import.meta.env.DEV ? "ws://localhost:4010" : `wss://${import.meta.env.VITE_DOMAIN}`;
        const url = `${domain}/api/ws/${id}`;
        connect(url);
        return () => {
            disconnect();
        };
    }, []);

    return (
        <div>
            <Dropdown placement="bottom-start" classNames={{ content: "p-0" }}>
                {/* <Badge as="button" content={messages.length} shape="circle" color="danger"> */}
                <DropdownTrigger>
                    <Button variant="bordered">Open Menu</Button>
                    {/* <NotificationIcon size={24} /> */}
                </DropdownTrigger>
                {/* </Badge> */}
                <DropdownMenu aria-label="Profile Actions" variant="flat" classNames={{ base: "p-0" }}>
                    <DropdownItem key="profile" className="p-0">
                        <Card className="max-w-[400px]">
                            <CardHeader className="block">
                                <div className="flex w-full items-center justify-between px-2">
                                    <div className="inline-flex items-center gap-1">
                                        <h4 className="inline-block align-middle text-large font-medium">Notifications</h4>
                                        <Chip size="sm">12</Chip>
                                    </div>
                                    <Button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 text-small gap-2 rounded-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-primary data-[hover=true]:bg-primary/20 h-8 px-3"
                                        type="button"
                                    >
                                        Mark all as read
                                    </Button>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <ScrollShadow className="min-w-[300px] max-w-[400px] h-[300px]">
                                    {messages.map((message, index) => (
                                        <div key={index} className="flex gap-3 border-b border-divider px-6 py-4" id="5">
                                            <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                            <div className="flex flex-col gap-1">
                                                <p className="text-small text-foreground">
                                                    <strong className="font-medium">{message.firstname}</strong> mentioned you in a post.
                                                </p>
                                                <time className="text-tiny text-default-400">2 days ago</time>
                                            </div>
                                        </div>
                                    ))}
                                    {messages.length == 0 && (
                                        <div className="h-[300px] flex flex-col justify-center items-center text-default-500">
                                            <NotificationIcon size={50} />
                                            <p className="mt-1">No notifications yet.</p>
                                        </div>
                                    )}
                                </ScrollShadow>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Button
                                    className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40"
                                    type="button"
                                >
                                    Settings
                                </Button>
                                <Button
                                    className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
                                    type="button"
                                >
                                    Archive All
                                </Button>
                            </CardFooter>
                        </Card>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default Notification;
