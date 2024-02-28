import { firstItems, secondItems } from "@/data/sidebar-items";

const Sidebar = () => {
  const styledHr = <hr className="text-zinc-700" />;

  return (
    <div className="flex flex-col gap-5 w-56 h-screen hover:overflow-y-scroll fixed pt-3">
      {firstItems.map((item) => (
        <p className="flex items-center gap-6 text-sm" key={item.title}>
          {item.icon} {item.title}
        </p>
      ))}
      {styledHr}
      {secondItems.map((item) => (
        <p className="flex items-center gap-6 text-sm" key={item.title}>
          {item.icon} {item.title}
        </p>
      ))}
      {styledHr}
    </div>
  );
};

export default Sidebar;
