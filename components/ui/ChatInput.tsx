import React from 'react';
import { Input } from './input';
import { Plus, SendHorizonal } from 'lucide-react';

export default function ChatInput() {
  return (
    <div className="z-10 flex h-14 w-full items-center justify-center gap-4 bg-gray-100 px-4 py-4">
      <Plus className="cursor-pointer" />
      <Input type="text" placeholder="Type a message"></Input>
      <SendHorizonal className="cursor-pointer" />
    </div>
  );
}
