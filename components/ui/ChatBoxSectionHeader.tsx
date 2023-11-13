'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';
import { UserInfo } from '@/types';

interface ChatBoxSectionHeaderProps {
  selectedUser: UserInfo | null;
}

export default function ChatBoxSectionHeader(props: ChatBoxSectionHeaderProps) {
  const { name, pic } = props.selectedUser || { name: '', pic: '' };
  return (
    <div className="relative flex w-full items-center justify-between bg-gray-100 p-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={pic} alt="profile_pic" />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div>{name}</div>
      </div>
      <div className="bg-blue-20 flex gap-5 px-2">
        <Bell className="cursor-pointer" />
      </div>
    </div>
  );
}
