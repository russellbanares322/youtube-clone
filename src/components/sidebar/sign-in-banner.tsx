import { LuUserCircle2 } from "react-icons/lu";

const SignInBanner = () => {
  return (
    <div className="ml-4">
      <p className="text-sm w-48">
        Sign in to like videos, comment, and subscribe.
      </p>
      <button className="flex items-center gap-2 border border-zinc-500 text-blue-400 mt-3 py-1 px-3 rounded-full hover:bg-blue-400/45 hover:border-blue-400/45">
        <LuUserCircle2 />
        Sign in
      </button>
    </div>
  );
};

export default SignInBanner;
