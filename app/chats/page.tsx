import { store } from '@/store';
import Container from '@/components/ui/container';

export default async function Chats() {
  const userInfo = store.getState().user.userInfo;

  return (
    <div className="flex min-h-screen  min-w-full flex-col bg-red-200">
      <Container>
        <div className="flex w-full justify-between">
          <div className="hidden flex-1 bg-blue-200 md:flex">my chats</div>
          <div className="flex-1 bg-green-200">chat box</div>
        </div>
      </Container>
    </div>
  );
}
