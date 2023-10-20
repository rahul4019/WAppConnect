'use client';

import { useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';

export default function ChatBoxSection() {
  const [chatSelected, setChatSelected] = useState(true);

  return (
    <div className='flex flex-col bg-green-200 w-full h-full'>
      {!chatSelected ? (
        <div className="text-3xl font-light text-gray-400">
          Click on a user to start a chat
        </div>
      ) : (
        <div>
          <ChatBoxSectionHeader />
          chat is selected
        </div>
      )}
    </div>
  );
}
