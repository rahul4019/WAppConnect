'use client';

import { useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';
import ChatInput from './ChatInput';
import background from '../../public/background.jpg';
import Image from 'next/image';

export default function ChatBoxSection() {
  const [chatSelected, setChatSelected] = useState(true);

  return (
    <div className="relative flex h-full w-full flex-col">
      <Image
        src={background}
        alt="background"
        fill
        priority
        className="-z-1"
        placeholder="blur"
        style={{ objectFit: 'cover' }}
      />
      {!chatSelected ? (
        <div className="text-3xl font-light text-gray-400">
          Click on a user to start a chat
        </div>
      ) : (
        <div className="flex h-full flex-col items-baseline  justify-between">
          <ChatBoxSectionHeader />
          <div className="z-10 text-white">chat is selected</div>
          <ChatInput />
        </div>
      )}
    </div>
  );
}
