import React from 'react';
import { Input } from './input';
import { Plus, Mic } from 'lucide-react';

export default function ChatInput() {
  return (
    <div className="flex h-14 w-full items-center justify-center gap-4 bg-gray-100 px-4">
      <Plus />
      <Input type="text" placeholder="Type a message"></Input>
      <Mic />
    </div>
  );
}
