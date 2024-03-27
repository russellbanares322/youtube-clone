import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tooltip from "../tooltip/tooltip";
import { LuUserCircle2 } from "react-icons/lu";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const ExtraButtons = () => {
  return (
    <>
      <SignedIn>
        <div className="flex items-center gap-2">
          <RiVideoAddLine className="cursor-pointer icon-hover p-2" size={40} />
          <Tooltip title="Notification">
            <IoMdNotificationsOutline
              className="cursor-pointer icon-hover p-2"
              size={40}
            />
          </Tooltip>
          <span className="bg-green-700 py-1 px-3 rounded-full mx-2 cursor-pointer">
            U
          </span>
        </div>
      </SignedIn>
      <UserButton />
      <SignedOut>
        <div className="flex items-center justify-center gap-4">
          <CgMoreVerticalAlt size={20} />
          <SignInButton>
            <button className="flex items-center gap-2 border border-zinc-500 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-400/45 hover:border-blue-400/45">
              <LuUserCircle2 />
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </>
  );
};

export default ExtraButtons;
