'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import SearchInput from './SearchInput';
import ChatCard from './ChatCard';

import { Button } from './button';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';

export default function NewChatButton() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useAppSelector((state) => state.users);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('api/users');

      if (data.success) {
      }
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    console.log('Users from store: ', users);
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        {/* message icon */}
        <TooltipProvider>
          <Tooltip>
            <MessageSquarePlus />
            <TooltipContent>
              <p>New chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader className="h-20 w-full">
          <SheetTitle>New Chat</SheetTitle>
          <SheetDescription>
            {/* <SearchInput /> */}
            {/* <Button onClick={handleSearch} /> */}
          </SheetDescription>
        </SheetHeader>
        {/* {users && users.length > 0 && users.map((user) => <ChatCard />)} */}
      </SheetContent>
    </Sheet>
  );
}
