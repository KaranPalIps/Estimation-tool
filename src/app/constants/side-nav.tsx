import { List, FileUp,LayoutDashboard, BookMarked } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
        color: "text-sky-500"
    },
    {
        title: "List",
        icon: List,
        href: "/list",
        color: "text-sky-500"
    },
    {
        title: "Upload Estimation",
        icon: FileUp,
        href: "/upload",
        color: "text-sky-500"
    },
    {
        title: "Saved Estimation",
        icon: BookMarked,
        href: "/saved",
        color: "text-sky-500"
    },
    {
        title: "Result",
        icon: BookMarked,
        href: "/saved",
        color: "text-sky-500"
    }


]