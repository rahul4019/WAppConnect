'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';

export default function ChatBoxSectionHeader() {
  return (
    <div className="relative flex w-full items-center justify-between bg-gray-100 p-3">
      <div className='flex gap-3 items-center'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>Test user</div>
      </div>
      <div className="bg-blue-20 flex gap-5 px-2">
        <Bell className='cursor-pointer'/>
      </div>
    </div>
  );
}
