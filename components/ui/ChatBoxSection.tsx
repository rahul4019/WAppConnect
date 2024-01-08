'use client';

import { useEffect, useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';
import ChatInput from './ChatInput';
import background from '../../public/background.jpg';
import Image from 'next/image';
import { UserInfo } from '@/types';
import SentMsg from './SentMsg';
import ReceivedMsg from './ReceivedMsg';

interface ChatBoxSectionProps {
  chatSelected: boolean;
  selectedUser: UserInfo | null;
}

export default function ChatBoxSection(props: ChatBoxSectionProps) {
  const { chatSelected, selectedUser } = props;
  const { email, name, pic, _id } = selectedUser || {
    email: '',
    name: '',
    pic: '',
    _id: '',
  };

  console.log('chat selected: ', chatSelected);
  useEffect(() => {}, [chatSelected]);

  return (
    <div className="relative flex h-full w-full flex-col ">
      <Image
        src={background}
        alt="background"
        fill
        priority
        className="-z-1"
        style={{ objectFit: 'cover', opacity: '0.2' }}
      />
      {!chatSelected ? (
        <div className="z-10 flex h-full items-center justify-center bg-[#f0f2f5] text-3xl font-light text-gray-400">
          <p className="flex">Click on a user to start a chat</p>
        </div>
      ) : (
        <div className="flex h-full flex-col items-baseline justify-between">
          <ChatBoxSectionHeader selectedUser={selectedUser} />
          {/* <div className="z-10 px-8 text-black">chat is selected</div> */}
          <div className="z-20 h-full w-full p-8">
            <SentMsg />
            <ReceivedMsg />
          </div>
          <ChatInput />
        </div>
      )}
    </div>
  );
}
