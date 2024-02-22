import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { MdOutlineSettings } from "react-icons/md";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";
import { RiBookLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { Search } from './ui/search';

const Sidebar = () => {
    return (
        <div className='h-full min-w-full flex-1 p-2 flex overflow-hidden'>
            <nav aria-label="Sidebar" className="hidden w-full h-full lg:block flex-shrink-0 border-2 rounded-lg border-grey overflow-y-auto">
                <div className="relative w-full flex space-y-16 flex-col p-6">
                    <div className='grid grid-cols-6 gap-10'>
                        <div className='col-start-1 col-end-2'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </div>
                        <div className='col-start-2 col-end-5 justify-center flex'>
                            <p className='text-sm mt-2 display2 font-medium text-slate-900'>Mauro Sicard</p>
                        </div>
                        <div className='col-start-5 col-end-6 justify-between contents'>
                            <MdOutlineSettings className='mt-2' />
                            <VscLayoutSidebarLeftOff className='mt-2' />
                        </div>
                    </div>

                    <div>
                        <Search placeholder='Search for chats..' />
                    </div>

                    <div>
                        <ul>
                            <li>
                                <div className='flex p-2 justify-between'>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <IoChatbubbleEllipsesOutline />
                                        </div>
                                        <div className='ml-2 mb-1'>
                                            <p className='text-sm mt-2 display2 font-medium'>Chats</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-white h-9 w-9 flex justify-center items-center rounded-md'>
                                            <MdKeyboardCommandKey />
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-2 justify-between'>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <RiBookLine />
                                        </div>
                                        <div className='ml-2 mb-1'>
                                            <p className='text-sm mt-2 display2 font-medium'>Library</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-white h-9 w-9 flex justify-center items-center rounded-md'>
                                            <MdKeyboardCommandKey />
                                            <p>2</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-2 justify-between'>
                                    <div className='flex justify-center items-center'>
                                        <div>
                                            <BsGrid />
                                        </div>
                                        <div className='ml-2 mb-1'>
                                            <p className='text-sm mt-2 display2 font-medium'>Apps</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-white h-9 w-9 flex justify-center items-center rounded-md'>
                                            <MdKeyboardCommandKey />
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Sidebar