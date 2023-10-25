'use client';

import { useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';
import ChatInput from './ChatInput';

export default function ChatBoxSection() {
  const [chatSelected, setChatSelected] = useState(true);

  return (
    <div className="flex h-full w-full flex-col bg-green-200">
      {!chatSelected ? (
        <div className="text-3xl font-light text-gray-400">
          Click on a user to start a chat
        </div>
      ) : (
        <div className="flex flex-col items-baseline justify-between  h-full">
          <ChatBoxSectionHeader />
          <div>chat is selected</div>
          <ChatInput />
        </div>
      )}
    </div>
  );
}
