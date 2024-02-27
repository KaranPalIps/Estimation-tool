"use client"
import React from 'react'
import { Button } from './button'
import { Search } from '../ui/search';
import { FaCloudUploadAlt } from "react-icons/fa";
import useStore from '@/lib/store';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Label } from './label';
import { Input } from './input';

const Header = ({ header }) => {
    return (
        <div className='w-[100%] my-4 px-5 border-b-2 border-[#F0F2F5] '>
            <div className='flex flex-row items-center mb-4'>
                <div className='mr-10'>
                    <h1 className='font-bold text-slate-800'>{header}</h1>
                </div>
                <div className='w-[30%]'>
                    <Search placeholder='Search for chats...' />
                </div>
                <div className='absolute right-[30px]'>
                    <Dialog>
                        <DialogTrigger>
                            <Button className='primary-btn'><FaCloudUploadAlt className='m-1' />Get Estimation</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button className='primary-btn' type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>

    )
}

export default Header