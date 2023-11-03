'use client';
import { AppDispatch, RootState, store } from '@/store';
import Container from '@/components/ui/container';
import MyChatHeader from '@/components/ui/MyChatHeader';
import SearchInput from '@/components/ui/SearchInput';
import ChatCard from '@/components/ui/ChatCard';
import ChatBoxSection from '@/components/ui/ChatBoxSection';
import axiosInstance from '@/helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '@/store/usersSlice';

export default function Chats() {
  // const users = store.getState().users.users;

  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
  console.log('All users: ', users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  });

  return (
    <Container>
      <div className="overflow- flex h-screen min-w-full flex-col">
        <div className="grid h-full w-full grid-cols-3 overflow-hidden">
          {/* My chats section */}
          <div className="relative col-span-1 box-border hidden max-h-screen flex-col md:flex">
            <MyChatHeader />
            <div className="border-y-1 border bg-white p-2">
              <SearchInput />
            </div>
            {/* chats container */}
            <div className="box-border flex-grow overflow-y-auto bg-white pb-8">
              {users.length > 0 &&
                users.map((user) => <ChatCard key={user._id} user={user} />)}
            </div>
          </div>
          {/* Chat box section */}
          <div className="col-span-2 flex min-h-full flex-col items-center justify-center bg-gray-100">
            <ChatBoxSection />
          </div>
        </div>
      </div>
    </Container>
  );
}
