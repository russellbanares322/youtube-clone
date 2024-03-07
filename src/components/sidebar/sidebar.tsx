import { secondItems } from "@/data/sidebar-items";
import FirstItemsDisplay from "./first-items-display";
import SecondItemsDisplay from "./second-items-display";
import SignInBanner from "./sign-in-banner";
import ThirdItemsDisplay from "./third-items-display";
import FourthItemsDisplay from "./fourth-items-display";

const Sidebar = () => {
  const isLoggedIn = true;
  const styledHr = <hr className="text-zinc-700 my-5" />;

  return (
    <div className="w-56 min-h-screen h-full pb-24 hover:overflow-y-scroll duration-100 ease-in-out">
      <FirstItemsDisplay />
      {styledHr}
      <SecondItemsDisplay isLoggedIn={isLoggedIn} />
      {!isLoggedIn && (
        <>
          {styledHr}
          <SignInBanner />
        </>
      )}
      {isLoggedIn && (
        <>
          {styledHr}
          <ThirdItemsDisplay />
        </>
      )}
      {styledHr}
      <FourthItemsDisplay />
    </div>
  );
};

export default Sidebar;
