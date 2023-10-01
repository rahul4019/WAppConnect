import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import SearchInput from './SearchInput';
import ChatCard from './ChatCard';

import { Skeleton } from '@/components/ui/skeleton';
import { Button } from './button';

import { MessageSquarePlus } from 'lucide-react';

export default function NewChatButton() {
  return (
    <Sheet>
      <SheetTrigger>
        {/* message icon */}
        <TooltipProvider>
          <Tooltip>
            <MessageSquarePlus />
            <TooltipContent>
              <p>New chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader className="h-20 w-full">
          <SheetTitle>New Chat</SheetTitle>
          <SheetDescription>
            {/* <SearchInput /> */}
            {/* <Button onClick={handleSearch} /> */}
          </SheetDescription>
        </SheetHeader>
        {/* {loading ? (
      <div>Loading...</div>
    ) : (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )} */}
      </SheetContent>
    </Sheet>
  );
}
