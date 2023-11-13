'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { fetchUsers, filterUsers } from '@/store/usersSlice';
import { AppDispatch } from '@/store';

const SearchInput = () => {
  const dispatch: AppDispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    keyword === '' ? dispatch(fetchUsers()) : dispatch(filterUsers(keyword));
  }, [keyword]);

  return (
    <div className="flex h-9 items-center gap-4 rounded-lg bg-gray-100 px-4 py-1">
      <Search className="" stroke="#54656f" height={20} width={20} />
      <Input
        type="text"
        placeholder="Search or start new chat"
        className="h-full border-none bg-gray-100 focus:outline-none focus:ring-gray-100"
        onChange={(e) => setKeyword(e.target.value.toLowerCase().trim())}
      />
    </div>
  );
};

export default SearchInput;
