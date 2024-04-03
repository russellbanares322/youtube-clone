import { TChildren } from "@/types/types";
import { Sidebar } from "../sidebar";
import BadgeFilter from "../navbar/badge-filter";
import { Navbar } from "../navbar";

const ContentWrapper = ({ children }: TChildren) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-full w-full pt-6">
        <div className="page-container py-2 mt-12 grid grid-cols-7 gap-10">
          <div>
            <Sidebar />
          </div>
          <div className="w-full col-span-6">
            <BadgeFilter />
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
