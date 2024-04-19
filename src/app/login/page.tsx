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
    <div className='main-background flex justify-center h-screen items-center'>
      {/* <Card className='p-8 w-1/2 h-1/3'>
        <CardContent>
        <form onSubmit={formik.handleSubmit}> 
            <div>
              <div><h1 className='text-center'>Login</h1></div>
              <p className='text-center'>Please sign in to continue</p>

              <Label>Email</Label>
              <Input placeholder='Email here' type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
              <div className='error-message'>
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
              </div>

              <Label>Password</Label>
              <Input placeholder='Password here' type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
              <div className='error-message'>
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
              </div>


              <div className='mt-3 float-right'>
                <Button className='primary-btn' disabled={loading} type='submit'>Login</Button>
              </div>
            </div>
          </form> 
        </CardContent>
      </Card> */}
    </div>
  )
}

export default page