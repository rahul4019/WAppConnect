import { store } from '@/store';
import Container from '@/components/ui/container';
import MyChatHeader from '@/components/ui/MyChatHeader';
import SearchInput from '@/components/ui/SearchInput';
import ChatCard from '@/components/ui/ChatCard';

export default async function Chats() {
  const userInfo = store.getState().user.userInfo;

  return (
    <Container>
      <div className="overflow- flex h-screen min-w-full flex-col">
        <div className="grid h-full w-full grid-cols-3 overflow-hidden">
          {/* My chats section */}
          <div className="col-span-1 box-border hidden max-h-screen flex-col md:flex relative">
            <MyChatHeader />
            <div className="border-y-1 border bg-white p-2">
              <SearchInput />
            </div>
            {/* chats container */}
            <div className="box-border flex-grow overflow-y-auto bg-white pb-8">
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
              <ChatCard />
            </div>
          </div>
          {/* Chat box section */}
          <div className="col-span-2 flex min-h-full items-center justify-center bg-gray-100 flex-col">

            <div className='text-3xl font-light text-gray-400'>Click on a user to start a chat</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
