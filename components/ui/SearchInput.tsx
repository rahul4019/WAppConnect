import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="flex h-9 items-center gap-4 rounded-lg bg-gray-100 px-4 py-1">
      <Search className="" stroke="#54656f" height={20} width={20} />
      <Input
        type="text"
        placeholder="Search or start new chat"
        className="h-full border-none focus:ring-gray-100 bg-gray-100 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
