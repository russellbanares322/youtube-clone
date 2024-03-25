import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tooltip from "../tooltip/tooltip";

const ExtraButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <RiVideoAddLine className="cursor-pointer icon-hover p-2" size={40} />
      <Tooltip title="Notification">
        <IoMdNotificationsOutline
          className="cursor-pointer icon-hover p-2"
          size={40}
        />
      </Tooltip>
      <span className="bg-green-700 py-1 px-3 rounded-full mx-2 cursor-pointer">
        U
      </span>
    </div>
  );
};

export default ExtraButtons;
