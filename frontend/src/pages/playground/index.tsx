import React from "react";
import Meta from "@/components/Meta";
import { Avatar, Button, Select, SelectItem, Textarea, Slider, Tabs, Tab, ScrollShadow } from "@nextui-org/react";
import { CopyIcon, ThumbsUpIcon, ThumbsDownIcon, EmojiIcon } from "@/components/icons";

interface Props {}

const PlaygroundPage: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Meta title="Admin Playground" />
            <div className="max-w-6xl mx-auto mt-6">
                <div className="flex items-center justify-center p-4">
                    <section className="h-full w-full">
                        <header className="flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between">
                            <div className="flex items-center gap-2">
                                <h1 className="text-large font-medium">Playground</h1>
                                {/* <Button className="aria-expanded:opacity-70 subpixel-antialiased flex lg:hidden">
                                    <EllipsisIcon role="img" />
                                </Button> */}
                            </div>
                            <div className="flex items-center gap-2">
                                <Select
                                    label="Select an animal"
                                    size="sm"
                                    className="group flex flex-col transition-background motion-reduce:transition-none !duration-150 group relative justify-end w-[200px] max-w-[120px] lg:max-w-[230px]"
                                    classNames={{
                                        trigger: "h-10 min-h-10",
                                    }}
                                >
                                    {[
                                        { key: "1", label: "Preset 1" },
                                        { key: "2", label: "Preset 2" },
                                    ].map((item) => (
                                        <SelectItem key={item.key}>{item.label}</SelectItem>
                                    ))}
                                </Select>
                                <Button className=" bg-default/40 text-default-foreground data-[hover=true]:opacity-hover">Save</Button>
                                <Button className="bg-default/40 text-default-foreground data-[hover=true]:opacity-hover">Update</Button>
                                <Button className="bg-danger/20 text-danger dark:text-danger-500 data-[hover=true]:opacity-hover">Delete</Button>
                            </div>
                        </header>
                        <main className="flex mt-6">
                            <div className="hidden w-1/4 flex-none flex-col gap-4 lg:flex">
                                <Textarea label="System" placeholder="You are a helpful Acme AI code assistant" className="max-w-xs" />
                                <Select
                                    label="Model"
                                    className="groupp flexp flex-colp transition-backgroundp motion-reduce:transition-nonep !duration-150 group relative justify-end"
                                    defaultSelectedKeys={["gpt-4"]}
                                >
                                    {[
                                        { key: "gpt-4", label: "gpt-4" },
                                        { key: "gpt-3.5-turbo-16k", label: "gpt-3.5-turbo-16k" },
                                        { key: "babbage-002", label: "babbage-002" },
                                        { key: "davinci-002", label: "davinci-002" },
                                    ].map((item) => (
                                        <SelectItem key={item.key}>{item.label}</SelectItem>
                                    ))}
                                </Select>
                                <div className="mt-2 flex w-full flex-col gap-6 px-1">
                                    <Slider
                                        label="Temperature"
                                        step={0.01}
                                        maxValue={1}
                                        minValue={0}
                                        defaultValue={0.4}
                                        size="sm"
                                        className="max-w-md"
                                    />
                                    <Slider
                                        label="Max Length"
                                        step={50}
                                        maxValue={2500}
                                        minValue={0}
                                        defaultValue={1191}
                                        size="sm"
                                        className="max-w-md"
                                    />
                                    <Slider label="Top P" step={0.01} maxValue={1} minValue={0} defaultValue={0.5} size="sm" className="max-w-md" />
                                    <Slider
                                        label="Frequency Penalty"
                                        step={0.01}
                                        maxValue={1}
                                        minValue={0}
                                        defaultValue={0}
                                        size="sm"
                                        className="max-w-md"
                                    />
                                    <Slider
                                        label="Presence Penalty"
                                        step={0.01}
                                        maxValue={2}
                                        minValue={0}
                                        defaultValue={1}
                                        size="sm"
                                        className="max-w-md"
                                    />
                                </div>
                            </div>
                            <div className="relative flex w-full flex-col gap-2 lg:w-3/4">
                                <div className="flex h-full w-full flex-col gap-8 max-w-full px-0 lg:pl-10">
                                    <div className="flex w-full flex-wrap items-center justify-center gap-2 border-b-small border-divider pb-2 sm:justify-between">
                                        <p className="text-base font-medium">{`Creative Uses for Kids' Art`}</p>
                                        <Tabs size="md" aria-label="Tabs sizes">
                                            <Tab key="photos" title="Photos" />
                                            <Tab key="music" title="Music" />
                                            <Tab key="videos" title="Videos" />
                                        </Tabs>
                                    </div>
                                    <ScrollShadow className="flex flex-col h-[40vh] lg:h-[50vh]">
                                        <div className="flex flex-col gap-4 px-1 mt-2">
                                            <div className="flex gap-3">
                                                <div className="relative flex-none">
                                                    <Avatar
                                                        isBordered
                                                        color="primary"
                                                        src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col gap-4">
                                                    <div className="relative w-full rounded-medium px-4 py-3 bg-content3 text-content3-foreground">
                                                        <div className="pr-20 text-small">
                                                            {`What are 5 creative things I could do with my kids' art? I don't want to throw them away,
                                                            but it's also so much clutter.`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="relative flex-none">
                                                    <Avatar
                                                        isBordered
                                                        color="secondary"
                                                        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col gap-4">
                                                    <div className="relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600">
                                                        <div className="pr-20 text-small">
                                                            <div>
                                                                <p className="mb-3">
                                                                    {`Certainly! Here's a summary of five creative ways to use your kids' art:`}
                                                                </p>
                                                                <ol className="space-y-2">
                                                                    <li>
                                                                        <strong>Create Art Books:</strong> Turn scanned artwork into custom photo
                                                                        books.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Set Up a Gallery Wall:</strong> Use a dedicated wall with
                                                                        interchangeable frames for displaying art.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Make Functional Items:</strong> Print designs on items like pillows,
                                                                        bags, or mugs.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Implement an Art Rotation System:</strong> Regularly change the
                                                                        displayed art, archiving the older pieces.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Use as Gift Wrap:</strong> Repurpose art as unique wrapping paper for
                                                                        presents.
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                        <div className="absolute right-2 top-2 flex rounded-full bg-content2 shadow-small">
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <CopyIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsUpIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsDownIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between rounded-medium border-small border-default-100 px-4 py-3 shadow-small">
                                                        <p className="text-small text-default-600">Was this response better or worse?</p>
                                                        <div className="flex gap-1">
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsUpIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsDownIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <EmojiIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="relative flex-none">
                                                    <div className="relative inline-flex shrink-0">
                                                        <Avatar
                                                            isBordered
                                                            color="primary"
                                                            src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex w-full flex-col gap-4">
                                                    <div className="relative w-full rounded-medium px-4 py-3 bg-content3 text-content3-foreground">
                                                        <div className="pr-20 text-small">
                                                            {`I didn't like the suggestions. Can you give me some more?`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="relative flex-none">
                                                    <Avatar
                                                        isBordered
                                                        color="secondary"
                                                        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col gap-4">
                                                    <div className="relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600">
                                                        <div className="pr-20 text-small">
                                                            <div>
                                                                <p className="mb-3">
                                                                    {`Of course! Here are five more creative suggestions for what to do with your
                                                                    children's art:`}
                                                                </p>
                                                                <ol className="space-y-2">
                                                                    <li>
                                                                        <strong>Create a Digital Archive:</strong> Scan or take photos of the artwork
                                                                        and save it in a digital cloud storage service for easy access and
                                                                        space-saving.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Custom Calendar:</strong>{" "}
                                                                        {`Design a custom calendar with each month
                                                                        showcasing a different piece of your child's art.`}
                                                                    </li>
                                                                    <li>
                                                                        <strong>Storybook Creation:</strong> Compile the artwork into a storybook,
                                                                        possibly with a narrative created by your child, to make a personalized book.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Puzzle Making:</strong> Convert their artwork into a jigsaw puzzle for
                                                                        a fun and unique pastime activity.
                                                                    </li>
                                                                    <li>
                                                                        <strong>Home Decor Items:</strong> Use the artwork to create home decor items
                                                                        like coasters, magnets, or lampshades to decorate your house.
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                        <div className="absolute right-2 top-2 flex rounded-full bg-content2 shadow-small">
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <CopyIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsUpIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                            <Button className="text-tiny rounded-full px-0 !gap-0 bg-transparent data-[hover=true]:bg-default/40 min-w-8 w-8 h-8">
                                                                <ThumbsDownIcon role="img" className="text-lg text-default-600" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollShadow>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex w-full flex-col gap-4">
                                            <ScrollShadow hideScrollBar className="flex flex-nowrap gap-2">
                                                <div className="flex gap-2">
                                                    <button
                                                        className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 text-small rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover flex h-14 flex-col items-start gap-0"
                                                        type="button"
                                                    >
                                                        <p>Create a blog post about NextUI</p>
                                                        <p className="text-default-500">explain it in simple terms</p>
                                                    </button>
                                                    <button
                                                        className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 text-small rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover flex h-14 flex-col items-start gap-0"
                                                        type="button"
                                                    >
                                                        <p>Give me 10 ideas for my next blog post</p>
                                                        <p className="text-default-500">include only the best ideas</p>
                                                    </button>
                                                    <button
                                                        className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 text-small rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover flex h-14 flex-col items-start gap-0"
                                                        type="button"
                                                    >
                                                        <p>Compare NextUI with other UI libraries</p>
                                                        <p className="text-default-500">be as objective as possible</p>
                                                    </button>
                                                    <button
                                                        className="z-0 group relative justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 text-small rounded-medium [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover flex h-14 flex-col items-start gap-0"
                                                        type="button"
                                                    >
                                                        <p>Write a text message to my friend</p>
                                                        <p className="text-default-500">be polite and friendly</p>
                                                    </button>
                                                </div>
                                            </ScrollShadow>
                                            <form className="flex w-full flex-col items-start rounded-medium bg-default-100 transition-colors hover:bg-default-200/70">
                                                <div className="group flex flex-col w-full min-h-[40px]" data-slot="base">
                                                    <div
                                                        data-slot="input-wrapper"
                                                        className="relative w-full inline-flex tap-highlight-transparent flex-row items-center px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-10 min-h-10 rounded-large !h-auto transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background py-2 !bg-transparent shadow-none"
                                                        style={{ cursor: "text" }}
                                                    >
                                                        <div
                                                            data-slot="inner-wrapper"
                                                            className="inline-flex w-full h-full box-border items-start group-data-[has-label=true]:items-start relative"
                                                        >
                                                            <textarea
                                                                data-slot="input"
                                                                className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 resize-none data-[hide-scroll=true]:scrollbar-hide group-data-[has-value=true]:text-default-foreground h-full transition-height !duration-100 motion-reduce:transition-none py-0 pt-1 pl-2 pb-6 !pr-10 text-medium"
                                                                aria-label="Prompt"
                                                                placeholder="Enter a prompt here"
                                                                id="react-aria320976807-:r1v:"
                                                                title=""
                                                                style={{ height: "100px !important" }}
                                                            />
                                                            <div className="flex items-end gap-2">
                                                                <button
                                                                    className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny gap-2 rounded-large opacity-disabled pointer-events-none px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground min-w-8 w-8 h-8 data-[hover=true]:opacity-hover"
                                                                    type="button"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        aria-hidden="true"
                                                                        role="img"
                                                                        className="[&>path]:stroke-[2px] text-default-600 iconify iconify--solar"
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="1.5"
                                                                            d="M12 20V4m0 0l6 6m-6-6l-6 6"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-full items-center justify-between gap-2 overflow-scroll px-4 pb-4">
                                                    <div className="flex w-full gap-1 md:gap-3">
                                                        <button
                                                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
                                                            type="button"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                                role="img"
                                                                className="text-default-500 iconify iconify--solar"
                                                                focusable="false"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="1.5"
                                                                    d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196c-2.653-2.539-6.954-2.539-9.607 0L3 10.034"
                                                                />
                                                            </svg>
                                                            Attach
                                                        </button>
                                                        <button
                                                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
                                                            type="button"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                                role="img"
                                                                className="text-default-500 iconify iconify--solar"
                                                                focusable="false"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="1.5"
                                                                    d="M12 4v16m4-13v10M8 7v10m12-6v2M4 11v2"
                                                                />
                                                            </svg>
                                                            Voice Commands
                                                        </button>
                                                        <button
                                                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover"
                                                            type="button"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                                role="img"
                                                                className="text-default-500 iconify iconify--solar"
                                                                focusable="false"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                                                    <path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73c.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
                                                                    <path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309" />
                                                                    <path strokeLinecap="round" d="m11.777 10l4.83 1.294M11 12.898l2.898.776" />
                                                                </g>
                                                            </svg>
                                                            Templates
                                                        </button>
                                                    </div>
                                                    <p className="py-1 text-tiny text-default-400">0/2000</p>
                                                </div>
                                            </form>
                                        </div>
                                        <p className="px-2 text-tiny text-default-400">
                                            Acme AI can make mistakes. Consider checking important information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export { PlaygroundPage };
