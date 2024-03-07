import { TChildren } from "@/types/types";
import { Sidebar } from "../sidebar";
import BadgeFilter from "../navbar/badge-filter";

const ContentWrapper = ({ children }: TChildren) => {
  return (
    <div className="h-full w-full pt-6">
      <div className="flex page-container py-2">
        <Sidebar />
        <div>
          <BadgeFilter />
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
