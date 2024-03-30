"use client";

import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tooltip from "../tooltip/tooltip";
import { LuUserCircle2 } from "react-icons/lu";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const ExtraButtons = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      {isSignedIn && (
        <div className="flex items-center gap-2">
          <RiVideoAddLine className="cursor-pointer icon-hover p-2" size={40} />
          <Tooltip title="Notification">
            <IoMdNotificationsOutline
              className="cursor-pointer icon-hover p-2"
              size={40}
            />
          </Tooltip>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}

      {!isSignedIn && (
        <div className="flex items-center justify-center gap-4">
          <Tooltip title="Settings">
            <CgMoreVerticalAlt className="cursor-pointer" size={21} />
          </Tooltip>
          <SignInButton>
            <button className="flex items-center gap-2 border border-zinc-500 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-400/45 hover:border-blue-400/45">
              <LuUserCircle2 />
              Sign in
            </button>
          </SignInButton>
        </div>
      )}
    </>
  );
};

export default ExtraButtons;
