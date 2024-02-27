"use client"
import React, { useState } from 'react'
import Head from 'next/head';
import Sidebar from './sidebar';
import MenuBarMobile from './menu-bar-mobile';

export default function MainLayout() {
    const [showSidebar, setShowSideBar] = useState(false);

    return (
        <>
            <MenuBarMobile setter={setShowSideBar}/>
            <Sidebar show={showSidebar} setter={setShowSideBar} />
        </>
    )
}