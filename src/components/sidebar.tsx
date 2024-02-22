import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { MdOutlineSettings,MdViewSidebar  } from "react-icons/md";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { Input } from './ui/input';

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
                            <p className='text-sm mt-2 display2 font-medium'>Mauro Sicard</p>
                        </div>
                        <div className='col-start-5 col-end-6 justify-between contents text-slate-600'>
                            <MdOutlineSettings className='mt-2' />
                            <VscLayoutSidebarLeftOff className='mt-2'/>
                        </div>
                    </div>

                    <div>
                        <Input placeholder='Search for chats...' i />
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Sidebar