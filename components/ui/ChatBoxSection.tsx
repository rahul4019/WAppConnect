'use client';

import { useEffect, useState } from 'react';
import ChatBoxSectionHeader from './ChatBoxSectionHeader';
import ChatInput from './ChatInput';
import background from '../../public/background.jpg';
import Image from 'next/image';

export default function ChatBoxSection(props: any) {
  // const [chatSelected, setChatSelected] = useState(true);
  // const [chatSelected, setChatSelected] = useState(false);
  const { chatSelected, selectedUser } = props;
  const {email, name, pic, _id} = selectedUser

  console.log('chat selected: ', chatSelected);
  useEffect(() => {
    console.log('chat selection triggered ');
  }, [chatSelected]);

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
          <ChatBoxSectionHeader selectedUser={selectedUser}/>
          {/* <div className="z-10 px-8 text-black">chat is selected</div> */}
          <ChatInput />
        </div>
      )}
    </div>
  );
}
