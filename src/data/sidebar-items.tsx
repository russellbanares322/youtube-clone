import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserSquare, PiMusicNote, PiNewspaper } from "react-icons/pi";
import { GrHistory, GrGamepad } from "react-icons/gr";
import { RiPlayList2Fill } from "react-icons/ri";
import { BiPlay } from "react-icons/bi";
import { LuClock4 } from "react-icons/lu";
import { BsFire } from "react-icons/bs";
import { GiClapperboard, GiHanger } from "react-icons/gi";
import { IoTrophyOutline } from "react-icons/io5";

const iconSize = 20;

export const firstItems = [
  {
    title: "Home",
    icon: <GoHomeFill size={iconSize} />,
    path: "/",
  },
  {
    title: "Shorts",
    icon: <SiYoutubeshorts size={iconSize} />,
    path: "/shorts",
  },
  {
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions size={iconSize} />,
    path: "/subscriptions",
  },
];

export const secondItems = [
  {
    title: "Your channel",
    needsAuthentication: false,
    icon: <PiUserSquare size={23} />,
    path: "/my-channel",
  },
  {
    title: "History",
    needsAuthentication: false,
    icon: <GrHistory size={iconSize} />,
    path: "/history",
  },
  {
    title: "Playlists",
    needsAuthentication: true,
    icon: <RiPlayList2Fill size={iconSize} />,
    path: "/playlists",
  },
  {
    title: "Your videos",
    needsAuthentication: true,
    icon: <BiPlay className="border border-solid" size={iconSize} />,
    path: "/my-videos",
  },
  {
    title: "Watch later",
    needsAuthentication: true,
    icon: <LuClock4 size={iconSize} />,
    path: "/watch-later",
  },
];

export const fourthItems = [
  {
    title: "Trending",
    icon: <BsFire size={iconSize} />,
    path: "/trending",
  },
  {
    title: "Music",
    icon: <PiMusicNote size={iconSize} />,
    path: "/music",
  },
  {
    title: "Movies",
    icon: <GiClapperboard size={iconSize} />,
    path: "/movies",
  },
  {
    title: "Gaming",
    icon: <GrGamepad size={iconSize} />,
    path: "/gaming",
  },
  {
    title: "news",
    icon: <PiNewspaper size={iconSize} />,
    path: "/news",
  },
  {
    title: "Sports",
    icon: <IoTrophyOutline size={iconSize} />,
    path: "/sports",
  },
  {
    title: "Fashion and Beauty",
    icon: <GiHanger size={iconSize} />,
    path: "/fashion",
  },
];
