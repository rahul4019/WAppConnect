'use client';

import { useRouter } from 'next/navigation';

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

import { useToast } from '@/components/ui/use-toast';
import { MoreVertical } from 'lucide-react';

import axiosInstance from '@/helpers/axios';

export default function MenuButton() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    axiosInstance
      .post('/api/users/logout')
      .then((res) => {
        toast({ title: 'Logout successful!' });
        router.push('/');
      })
      .catch((err) => console.log(err));
  };

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
