import { store } from '@/store';
import Container from '@/components/ui/container';
import MyChatHeader from '@/components/ui/MyChatHeader';
import SearchInput from '@/components/ui/SearchInput';
import ChatCard from '@/components/ui/ChatCard';

export default async function Chats() {
  const userInfo = store.getState().user.userInfo;

  return (
    <Container>
      <div className="flex h-screen min-w-full flex-col bg-red-200 p-4">
        <div className="grid h-full w-full grid-cols-3 bg-white">
          {/* My chats section */}
          <div className="col-span-1 hidden   md:block">
            <MyChatHeader />
            <div className="border-y-1 border bg-white p-2">
              <SearchInput />
            </div>
            {/* chats container */}
            <div className="h-full ">
              <ChatCard />
              <ChatCard />
            </div>
          </div>
          {/* Chat box section */}
          <div className="col-span-2 min-h-full bg-green-200">chat box</div>
        </div>
      </div>
    </Container>
  );
}
