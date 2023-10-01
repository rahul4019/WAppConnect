import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import MenuButton from './MenuButton';
import NewChatButton from './NewChatButton';

const MyChatHeader = () => {
  return (
    <div className="relative flex w-full items-center justify-between bg-gray-100 p-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="bg-blue-20 flex gap-5 px-2">
        <NewChatButton />
        <MenuButton />
      </div>
    </div>
  );
};

export default MyChatHeader;
