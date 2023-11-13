'use client';

import { useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';
import ChatInput from './ChatInput';
import background from '../../public/background.jpg';
import Image from 'next/image';

export default function ChatBoxSection() {
  const [chatSelected, setChatSelected] = useState(true);

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
        <div className="flex h-full flex-col items-baseline  justify-between">
          <ChatBoxSectionHeader />
          <div className="z-10 text-black">chat is selected</div>
          <ChatInput />
        </div>
      )}
    </div>
  );
}
