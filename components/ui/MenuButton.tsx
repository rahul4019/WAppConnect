import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import axiosInstance from '@/helpers/axios';
import { MoreVertical } from 'lucide-react';


const handleLogout = async () => {
  axiosInstance
    .get('/api/users/logout')
    .then((res) => {
      console.log(res);
      
    })
    .catch((err) => console.log(err));
};

export default function MenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* menu icon */}
        <TooltipProvider>
          <Tooltip>
            <MoreVertical />
            <TooltipContent>
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          New group
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleLogout()}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
