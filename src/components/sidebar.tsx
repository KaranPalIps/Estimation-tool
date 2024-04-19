"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { LiaFileUploadSolid } from "react-icons/lia";
import { CiSaveDown1 } from "react-icons/ci";
import { Search } from './ui/search';
import { Button } from './ui/button';

type SidebarProps = {
    show: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
}

type MenuItemProps = {
    icon: React.ReactNode,
    name: string,
    route: string,
}


function Sidebar({ show, setter }: SidebarProps) {
    const pathname = usePathname();

    // Define our base class
    const className = "main-background w-[350px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40 text-color";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-200px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }: MenuItemProps) => {
        // Highlight menu item based on currently displayed route
        const colorClass = pathname === route ? "active-tab" : "text-color hover:text-hover";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter((oldVal: any) => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-slate-100 z-30`}
            onClick={() => {
                setter((oldVal: any) => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className='flex gap-1 [&>*]:my-auto text-md pl-6 py-3'>
                    <div className='flex [&>*]:mx-auto'>
                        <h1 className='text-2xl bold'>Estimation Tool</h1>
                    </div>
                </div>

                <div className='flex p-4'>
                    <Search placeholder='Search..' />
                </div>

                <div className="flex flex-col">
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
                </div>
                <div className='absolute bottom-0 left-[3%]'>
                    <div className='flex mb-5 justify-center'>
                        <Button className='primary-btn'>Logout</Button>
                    </div>
                </div>

            </div>
            {show ? <ModalOverlay /> : <></>}

        </>
    )
}

export default Sidebar