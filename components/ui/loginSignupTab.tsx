'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 
const LoginSignupTab = () => {
  const [loginData, setLoginData] = useState({
    email:'',
    password:'',
  })
  const [signupData, setSignupData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const [pic, setPic] = useState()

  const handleLoginData = (e) => {
    const{name,value} = e.target
    setLoginData({...loginData,[name]:value})
   }

  const handleSignupData = (e) => {
    const{name,value} = e.target
    setSignupData({...signupData,[name]:value})
  }

  const handleSubmit = () => {
    console.log(loginData)
    console.log(signupData)
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Signup</TabsTrigger>
      </TabsList>
      {/* login tab */}
      <TabsContent value="account" className="my-6">
        <Card className="py-2">
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input id="email" name='email' value={loginData.email} placeholder="guest@example.com" 
              type='email' onChange={handleLoginData}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input id="password" name='password' value={loginData.password} placeholder="******" type='password' onChange={handleLoginData}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-500" onClick={handleSubmit}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      {/* signup tab */}
      <TabsContent value="password">
        <Card className="py-2">
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </Label>
              <Input id="name" name='name' value={signupData.name} placeholder="Enter your Name" type='text' onChange={handleSignupData}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input id="email" name='email' value={signupData.email} placeholder="Enter you email Address" type='email' onChange={handleSignupData}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input id="password" name='password' value={signupData.password} placeholder="Password" type='password' onChange={handleSignupData}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm_password">
                Confirm Password <span className="text-red-600">*</span>
              </Label>
              <Input id="confirm_password" name='confirmPassword' value={signupData.confirmPassword} placeholder="Confirm Password" type='password' onChange={handleSignupData}/>
            </div>

            <div className="space-y-1">
              <Label htmlFor="pic">Upload Picture</Label>
              <Input id="pic" type="file" accept='image/*' onChange={(e) => setPic(e.target.files[0])}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-500" onClick={handleSubmit}>
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginSignupTab;
