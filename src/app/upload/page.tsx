"use client";
import Header from '@/components/ui/header'
import React, { ChangeEvent, useState } from 'react'
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label'
import { Button } from '@/components/ui/button';

const UploadEstimation = () => {

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

  const handleRemoveClick = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <Header header="Upload Estimation" />
      <div>
        <form className="max-w-[80%] mx-auto">
          <div className='flex mt-5'>
            <div className='flex flex-col w-[100%] mr-10'>
              <Label className='mb-1'>Name*</Label>
              <Input placeholder="Name" name="name" className='mr-10' />
            </div>
            <div className='flex flex-col w-[100%]'>
              <Label className='mb-1'>Domain</Label>
              <Input placeholder="Domain" name="domain" />
            </div>

          </div>
          <div className='flex mt-5'>
            <div className='w-[100%]'>
              <Label>Technology*</Label>
              <div className='flex flex-row w-[100%]'>
                <Input placeholder="Back-End" className='mr-10' name="backend" />
                <Input placeholder="Front-End" name="frontend" />
              </div>
            </div>

          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
            <Label htmlFor="picture">Upload File*</Label>
            <Input className='p-2' id="picture" type="file" onChange={handleFileChange} />
            <span className='text-[12px]'><b>Note:</b> File should be in xls or xlsx</span>
          </div>
          <Button className='primary-btn' type="submit">Save changes</Button>
        </form>
      </div>
    </div>
  )
}

export default UploadEstimation