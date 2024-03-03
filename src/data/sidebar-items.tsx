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
  },
  {
    title: "Shorts",
    icon: <SiYoutubeshorts size={iconSize} />,
  },
  {
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions size={iconSize} />,
  },
];

export const secondItems = [
  {
    title: "Your channel",
    needsAuthentication: false,
    icon: <PiUserSquare size={23} />,
  },
  {
    title: "History",
    needsAuthentication: false,
    icon: <GrHistory size={iconSize} />,
  },
  {
    title: "Playlists",
    needsAuthentication: true,
    icon: <RiPlayList2Fill size={iconSize} />,
  },
  {
    title: "Your videos",
    needsAuthentication: true,
    icon: <BiPlay className="border border-solid" size={iconSize} />,
  },
  {
    title: "Watch later",
    needsAuthentication: true,
    icon: <LuClock4 size={iconSize} />,
  },
];

export const fourthItems = [
  {
    title: "Trending",
    icon: <BsFire size={iconSize} />,
  },
  {
    title: "Music",
    icon: <PiMusicNote size={iconSize} />,
  },
  {
    title: "Movies",
    icon: <GiClapperboard size={iconSize} />,
  },
  {
    title: "Gaming",
    icon: <GrGamepad size={iconSize} />,
  },
  {
    title: "news",
    icon: <PiNewspaper size={iconSize} />,
  },
  {
    title: "Sports",
    icon: <IoTrophyOutline size={iconSize} />,
  },
  {
    title: "Fashion and Beauty",
    icon: <GiHanger size={iconSize} />,
  },
];
