import { secondItems } from "@/data/sidebar-items";
import FirstItemsDisplay from "./first-items-display";
import SecondItemsDisplay from "./second-items-display";
import SignInBanner from "./sign-in-banner";

const Sidebar = () => {
  const isLoggedIn = true;
  const styledHr = <hr className="text-zinc-700 my-5" />;

  return (
    <div className="w-56 h-screen hover:overflow-y-scroll fixed pt-3">
      <FirstItemsDisplay />
      {styledHr}
      <SecondItemsDisplay isLoggedIn={isLoggedIn} />
      {styledHr}
      {!isLoggedIn && <SignInBanner />}
      {styledHr}
    </div>
  );
};

export default Sidebar;
