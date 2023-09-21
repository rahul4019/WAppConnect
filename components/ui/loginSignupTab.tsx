'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

const LoginSignupTab = () => {
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState();

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const postDetails = (pics: File) => {
    console.log(pics);
    setLoading(true);
    if (pics === undefined) {
      console.log('Hello world');
      toast({
        title: 'Please select a profile picture',
      });
      return;
    }

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'WAppConnect');
      data.append('cloud_name', 'rahul4019');

      fetch('https://api.cloudinary.com/v1_1/rahul4019/image/upload', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast({
        title: 'Please select a profile picture',
      });
      setLoading(false);
      return;
    }
  };

  // handles both signup and login
  const handleSubmit = async (type: string) => {
    setLoading(true);
    if (type === 'signup') {
      const { name, email, password, confirmPassword } = signupData;

      if (!name || !email || !password || !confirmPassword) {
        toast({ title: 'Please fill all the fields' });
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        toast({ title: 'Passwords do not match' });
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.post('/api/users/signup', {
          name,
          email,
          password,
          pic,
        });

        if (data.success) {
          toast({
            title: 'Registration successful',
          });
        }
        localStorage.setItem('userInfo', JSON.stringify(data.user));
        setLoading(false);
      } catch (error: any) {
        toast({
          title: error.response.data.message,
        });
        setLoading(false);
      }
    }
  };

  return (
    <Tabs defaultValue='login' className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      {/* login tab */}
      <TabsContent value="login" className="my-6">
        <Card className="py-2">
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                value={loginData.email}
                placeholder="guest@example.com"
                type="email"
                onChange={handleLoginData}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                name="password"
                value={loginData.password}
                placeholder="******"
                type="password"
                onChange={handleLoginData}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-green-600 hover:bg-green-500"
              onClick={() => handleSubmit('login')}
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      {/* signup tab */}
      <TabsContent value="signup">
        <Card className="py-2">
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={signupData.name}
                placeholder="Enter your Name"
                type="text"
                onChange={handleSignupData}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">
                Email Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                value={signupData.email}
                placeholder="Enter you email Address"
                type="email"
                onChange={handleSignupData}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                name="password"
                value={signupData.password}
                placeholder="Password"
                type="password"
                onChange={handleSignupData}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm_password">
                Confirm Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="confirm_password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                placeholder="Confirm Password"
                type="password"
                onChange={handleSignupData}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="pic">Upload Picture</Label>
              <Input
                id="pic"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    postDetails(files[0]);
                  }
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500"
              onClick={() => handleSubmit('signup')}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginSignupTab;
