'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatCard = (props:any) => {
  // const { _id, name, email, pic } = props?.user;

  // console.log('_id: ', props?.user?._id);
  // console.log('_id: ', props.user._id);
  // console.log('name: ', name);
  // console.log('email: ', email);
  // console.log('pic: ', pic);

  console.log('PROPS in ChatCard: ', props);
  return (
    <div>
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
