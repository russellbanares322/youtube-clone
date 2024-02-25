import { TChildren } from "@/types/types";
import { Sidebar } from "../sidebar";

const ContentWrapper = ({ children }: TChildren) => {
  return (
    <div className="h-full w-full">
      <div className="flex page-container py-2">
        <Sidebar />
        <div className="border ml-80 border-blue-700 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
