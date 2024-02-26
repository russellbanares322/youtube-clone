import { TChildren } from "@/types/types";
import { Sidebar } from "../sidebar";

const ContentWrapper = ({ children }: TChildren) => {
  return (
    <div className="h-full w-full pt-14">
      <div className="flex page-container py-2">
        <Sidebar />
        <div className="ml-80 w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default ContentWrapper;
