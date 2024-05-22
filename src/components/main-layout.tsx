"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './sidebar';
import MenuBarMobile from './mobileSidebar';

export default function MainLayout() {
    const [showSidebar, setShowSideBar] = useState(false);
    const pathname = usePathname()
    const noNav=  ['/login', '/Registration'];
    return (
        <>
            {noNav.includes(pathname) ? null:  <> <MenuBarMobile setter={setShowSideBar}/> <Sidebar show={showSidebar} setter={setShowSideBar} />
        </>}
        </>
    )
}