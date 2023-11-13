'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserInfo } from '@/types';

interface ChatCardProps {
  setChatSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  user: UserInfo;
}

const ChatCard = (props: ChatCardProps) => {
  const { setChatSelected, setSelectedUser, user } = props;
  return (
    <div
      onClick={() => {
        setChatSelected(true);
        setSelectedUser(user);
      }}
    >
      <div className="border-y-1 flex cursor-pointer gap-4 border px-2 py-4 hover:bg-gray-100">
        <Avatar>
          {/* profile pic */}
          <AvatarImage src={props.user.pic} alt="@shadcn" />
          <AvatarFallback>{props?.user?.name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          {/* name */}
          <p className="text-lg">{props?.user?.name}</p>
          <span className="text-sm">Hello there! how are you </span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
