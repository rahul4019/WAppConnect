import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatCard = () => {
  return (
    <div className="border-y-1 flex cursor-pointer gap-4 border px-2 py-4 hover:bg-gray-100">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-lg">Rahul kumar</p>
        <span className="text-sm">Hello there! how are you </span>
      </div>
    </div>
  );
};

export default ChatCard;
