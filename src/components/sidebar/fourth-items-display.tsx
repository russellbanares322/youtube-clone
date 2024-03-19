import { fourthItems } from "@/data/sidebar-items";

const FourthItemsDisplay = () => {
  return (
    <div className="flex flex-col gap-4 text-[0.93rem]">
      {fourthItems.map((item) => (
        <p
          className="flex items-center gap-6 text-sm cursor-pointer"
          key={item.title}
        >
          {item.icon} {item.title}
        </p>
      ))}
    </div>
  );
};

export default FourthItemsDisplay;
