'use client'
import { use, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
// import { login, logout, setToken, validateUser } from '@/services/authentication.service'
import _ from 'lodash';
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"

const page = () => {
  const [isRegister, setRegister] = useState(false);
  const router = useRouter();
  const { toast } = useToast()
  const [loading, setLoading] = useState(false);
  const validate = (values: { email?: string, password?: string, full_name?: string }) => {
    const errors: { email?: string, password?: string, full_name?: string } = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.full_name && isRegister) {
      errors.full_name = 'Required';
    }
    return errors;
  };

  // useEffect(() => {
  //   validateUser().then(user => {
  //     if (!_.isEmpty(user)) {
  //       console.log(user);
  //       router.push("/")
  //       logout();
  //     }
  //   }).catch(err => {
  //   })
  // }, [])

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     full_name: ''
  //   },
  //   validate,
  //   onSubmit: values => {
  //     setLoading(true);
  //     if (isRegister) {
  //       // register
  //     } else {
  //       let details = {
  //         'email': values.email,
  //         'password': values.password
  //       };
  //       login(details)
  //         .then((response: any) => {
  //           setLoading(false);
  //           setToken(response.data)
  //           router.push("/")
  //         })
  //         .catch((err: any) => {
  //           console.log('err: ', err);
  //           toast({
  //             title: 'Error',
  //             description: err.response.data.message,
  //           })
  //           setLoading(false);
  //         })
  //     }
  //   }
  // })
  return (
    <div className='bg-#f5f5f9 w-full flex flex-auto items-stretch'>

      <div className='flex min-h-screen w-full items-center justify-center overflow-hidden'>
        <div className='max-w-lg relative'>
          <Card className='h-full'>
            <CardContent className='min-w-96 min-h-64 pt-6'>
              <form>
                <div>
                  <div className='pb-2'><h1 className='text-center'>IPS Estimation Tool</h1></div>

                  <Label>Username</Label>
                  <Input placeholder='Username' type='email' name='email' />
                  <div className='error-message'>
                    {/* {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null} */}
                  </div>

                  <Label>Password</Label>
                  <Input placeholder='Password' type='password' name='password' />
                  <div className='error-message'>
                    {/* {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null} */}
                  </div>


                  <div className='mt-3'>
                    <Button className='primary-btn w-full' disabled={loading} type='submit'>Login</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default page