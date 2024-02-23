import React from 'react'
import { Input } from './input'
import { Label } from './label'
import { Button } from './button'
import { Search } from '../ui/search';


const Header = () => {
    return (
        <div className='w-[100%] my-4 px-5 border-b-2 border-[#F0F2F5] '>
            <div className='flex flex-row items-center mb-4'>
                <div className='mr-10'>
                    <h1 className='font-bold text-slate-800'>App name</h1>
                </div>
                <div className='w-[30%]'>
                    <Search placeholder='Search for chats...' />
                </div>
                <div className='absolute right-[30px]'>
                    <Button>New Chat</Button>
                </div>
            </div>

        </div>
    )
}

export default Header