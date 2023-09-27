import { store } from '@/store';
import Container from '@/components/ui/container';
import MyChatHeader from '@/components/ui/MyChatHeader';

export default async function Chats() {
  const userInfo = store.getState().user.userInfo;

  return (
    <div className="flex min-h-screen  min-w-full flex-col bg-red-200 p-4">
      <Container>
        <div className="flex w-full justify-between">
          {/* My chats section */}
          <div className="hidden flex-1 bg-blue-200 md:flex">
            <MyChatHeader />
          </div>
          {/* Chat box section */}
          <div className="flex-1 bg-green-200">chat box</div>
        </div>
      </Container>
    </div>
  );
}
