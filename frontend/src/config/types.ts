/* eslint-disable */
import type { OptionsObject } from "notistack";
import { ReactNode } from "react";

type Notifications = {
    options: OptionsObject;
    maxSnack: number;
};

type Pagination = {
    page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
};

type Column = {
    name: string;
    uid: string | number;
    sortable?: boolean;
};

type TableProps = {
    columns: Column[];
    rows?: { [key: string]: any }[];
    pagination?: Pagination;
    callbackFunction: (user: any, columnKey: string | number) => ReactNode;
    onSearchChange: (value: string) => void;
    onAddNew?: () => void;
    query: string;
};

export type { Pagination, Column, TableProps, Notifications };
