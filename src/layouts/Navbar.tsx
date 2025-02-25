import React, { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, VenetianMask } from "lucide-react";
import NavarToggleBtn from "@/components/ui/NavarToggleBtn";
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <div className=" h-16 z-10 bg-zinc-950 relative flex px-5 sm:px-10 md:px-20 items-center justify-between">
      <Link href={"/"}>
        <div className="text-xl font-bold text-purple-300">Hackify</div>
      </Link>

      <div className="flex gap-5 items-center">
      {session && ( 
          <div>
            <Link className="underline" href="/dashboard">
              Dashboard
            </Link>
          </div>
        )}
        {session ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={session?.user?.image || "https://github.com/shadcn.png"}
                  alt={session?.user?.name || "User"}
                />
                <AvatarFallback>
                  {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className=" w-52 bg-zinc-900 border-slate-500 text-white mr-5 mt-2">
              <h1 className="text-sm text-slate-300 border-b pb-1 border-slate-500/30 font-semibold">
                Actions
              </h1>
              <div className="flex gap-2 mt-3 flex-col">
                <Link
                  href={"/dashboard"}
                  className="flex items-center border-b border-slate-500/30 pb-1 gap-1 w-full text-[15px] font-medium"
                >
                  <VenetianMask size={22} /> Dashboard
                </Link>
                <div
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="flex items-center cursor-pointer  gap-1 w-full text-[15px] font-medium"
                >
                  <LogOut size={22} />
                  Logout
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Link href="/api/auth/signin" className="underline">
            Sign In
          </Link>
        )}
        <NavarToggleBtn menuOpen={isOpen} setMenuOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;