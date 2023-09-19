'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoginSignupTab = () => {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Login</TabsTrigger>
        <TabsTrigger value='password'>Signup</TabsTrigger>
      </TabsList>
      <TabsContent value='account' className='my-6'>
        <Card className='py-2'>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='email'>
                Email Address <span className='text-red-600'>*</span>
              </Label>
              <Input id='email' placeholder='guest@example.com' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>
                Password <span className='text-red-600'>*</span>
              </Label>
              <Input id='password' placeholder='******' />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full bg-blue-600'>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card className='py-2'>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='name'>
                Name <span className='text-red-600'>*</span>
              </Label>
              <Input id='name' placeholder='Enter your Name' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='email'>
                Email Address <span className='text-red-600'>*</span>
              </Label>
              <Input id='email' placeholder='Enter you email Address' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='password'>
                Password <span className='text-red-600'>*</span>
              </Label>
              <Input id='password' placeholder='Password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='confirm_password'>
                Confirm Password <span className='text-red-600'>*</span>
              </Label>
              <Input id='confirm_password' placeholder='Confirm Password' />
            </div>

            <div className='space-y-1'>
              <Label htmlFor='pic'>Upload Picture</Label>
              <Input id='pic' type='file' />
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full bg-blue-600'>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginSignupTab;
