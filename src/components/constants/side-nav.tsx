import { GraduationCap, BadgeInfo } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
    {
        title: "Dashboard",
        icon: GraduationCap,
        href: "/",
        color: "text-sky-500"
    },
    {
        title: "List",
        icon: BadgeInfo,
        href: "/list",
        color: "text-sky-500"
    },
    {
        title: "Upload Estimation",
        icon: BadgeInfo,
        href: "/upload",
        color: "text-sky-500"
    },
    {
        title: "Saved Estimation",
        icon: BadgeInfo,
        href: "/saved",
        color: "text-sky-500"
    },
    {
        title: "Result",
        icon: BadgeInfo,
        href: "/result",
        color: "text-sky-500"
    }
]


/***
 * 
 *   <div className="flex flex-col">
                    <MenuItem
                        name="Dashboard"
                        route="/"
                        icon={<IoChatbubbleEllipsesOutline />}
                    />
                    <MenuItem
                        name="List"
                        route="/list"
                        icon={<CiViewList />}
                    />
                    <MenuItem
                        name="Upload Estimation"
                        route="/upload"
                        icon={<LiaFileUploadSolid />}
                    />
                    <MenuItem
                        name="Saved Estimation"
                        route="/saved"
                        icon={<CiSaveDown1 />}
                    />
                    <MenuItem
                        name="Result"
                        route="/result"
                        icon={<CiSaveDown1 />}
                    />
 */