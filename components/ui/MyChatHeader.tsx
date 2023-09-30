import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { MessageSquarePlus, MoreVertical } from 'lucide-react';

const MyChatHeader = () => {
  return (
    <div className="flex w-full items-center justify-between bg-gray-100 p-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="bg-blue-20 flex gap-5 px-2">
        {/* message icon */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <MessageSquarePlus />
            </TooltipTrigger>
            <TooltipContent>
              <p>New chat</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* menu icon */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <MoreVertical />
            </TooltipTrigger>
            <TooltipContent>
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default MyChatHeader;
