import { sidebarItems } from "@/data/sidebar-items";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 w-56 h-screen hover:overflow-y-scroll fixed pt-3">
      {sidebarItems.map((item) => (
        <p className="flex items-center gap-6 text-sm" key={item.title}>
          {item.icon} {item.title}
        </p>
      ))}
      <hr className="text-zinc-700" />
    </div>
  );
};

export default Sidebar;
