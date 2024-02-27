import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/ui/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div className='main-background flex justify-center h-screen items-center'>
        <Card className='p-8 w-1/2 h-1/3'>
        <CardContent>
            <div>
                <div><h1 className='text-center'>Login</h1></div>
                <p className='text-center'>Please sign in to continue</p>

                <Label>Email</Label>
                <Input placeholder='Email here' type='email'/>

                <Label>Password</Label>
                <Input placeholder='Password here' type='password'/>

                <div className='mt-3 float-right'>
                <Button className='primary-btn' type='submit'>Login</Button>
                </div>
            </div>
        </CardContent>
    </Card>
    </div>
  )
}

export default page