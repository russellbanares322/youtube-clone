import { filterOptionsData } from "@/data/filter-options-data";

const BadgeFilter = () => {
  return (
    <div className="flex items-center gap-2 w-full mb-5">
      {filterOptionsData.map((item) => (
        <p
          key={item}
          className="text-sm bg-gray p-2 w-max rounded-md font-semibold cursor-pointer"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default BadgeFilter;
