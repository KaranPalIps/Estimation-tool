"use client"
import React, { ChangeEvent, useState } from 'react'
import { Button } from './button'
import { Search } from '../ui/search';
import { FaCloudUploadAlt } from "react-icons/fa";
import useStore from '@/lib/store';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { Label } from './label';
import { Input } from './input';

const Header = ({ header }) => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
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
                            <Button className='primary-btn'><FaCloudUploadAlt className='m-1' />Search Estimation</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Search Estimation</DialogTitle>
                                <DialogDescription>
                                    Upload file to generate Estimation.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className='flex flex-col w-[100%]'>
                                    <Label className='mb-1'>Domain</Label>
                                    <Input placeholder="Domain" name="domain" />
                                </div>

                                <div className='flex flex-col w-[100%]'>
                                    <Label className='mb-1'>Frontend</Label>
                                    <Input placeholder="Frontend Technology" name="frontend" />
                                </div>

                                <div className='flex flex-col w-[100%]'>
                                    <Label className='mb-1'>Backend</Label>
                                    <Input placeholder="Backend Technology" name="backend" />
                                </div>


                                <div className='flex flex-col w-[100%]'>
                                    <Label className='mb-1'>Domain</Label>
                                    <Input placeholder="Domain" name="domain" />
                                </div>

                                <Input className='p-2' id="picture" type="file" onChange={handleFileChange} />
                                <span className='text-[12px]'><b>Note:</b> File should be in xls or xlsx</span>
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