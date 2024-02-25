import { sidebarItems } from "@/data/sidebar-items";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-1 w-72 border border-red h-screen hover:overflow-y-scroll fixed">
      {sidebarItems.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Sidebar;
