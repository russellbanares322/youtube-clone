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
import { TRoutesPath } from "@/types/types";

const iconSize = 20;

type TSidebarItems = {
  title: string;
  icon: React.ReactNode;
  path: string;
  pathName: TRoutesPath;
};

export const firstItems: TSidebarItems[] = [
  {
    title: "Home",
    icon: <GoHomeFill size={iconSize} />,
    path: "/",
    pathName: "HOME",
  },
  {
    title: "Shorts",
    icon: <SiYoutubeshorts size={iconSize} />,
    path: "/shorts",
    pathName: "SHORTS",
  },
  {
    title: "Subscriptions",
    icon: <MdOutlineSubscriptions size={iconSize} />,
    path: "/subscriptions",
    pathName: "SUBSCRIPTIONS",
  },
];

export const secondItems: (TSidebarItems & { needsAuthentication: boolean })[] =
  [
    {
      title: "Your channel",
      needsAuthentication: false,
      icon: <PiUserSquare size={23} />,
      path: "/my-channel",
      pathName: "YOUR_CHANNEL",
    },
    {
      title: "History",
      needsAuthentication: false,
      icon: <GrHistory size={iconSize} />,
      path: "/history",
      pathName: "HISTORY",
    },
    {
      title: "Playlists",
      needsAuthentication: true,
      icon: <RiPlayList2Fill size={iconSize} />,
      path: "/playlists",
      pathName: "PLAYLISTS",
    },
    {
      title: "Your videos",
      needsAuthentication: true,
      icon: <BiPlay className="border border-solid" size={iconSize} />,
      path: "/my-videos",
      pathName: "YOUR_VIDEOS",
    },
    {
      title: "Watch later",
      needsAuthentication: true,
      icon: <LuClock4 size={iconSize} />,
      path: "/watch-later",
      pathName: "WATCH_LATER",
    },
  ];

export const fourthItems: TSidebarItems[] = [
  {
    title: "Trending",
    icon: <BsFire size={iconSize} />,
    path: "/trending",
    pathName: "TRENDING",
  },
  {
    title: "Music",
    icon: <PiMusicNote size={iconSize} />,
    path: "/music",
    pathName: "MUSIC",
  },
  {
    title: "Movies",
    icon: <GiClapperboard size={iconSize} />,
    path: "/movies",
    pathName: "MOVIES",
  },
  {
    title: "Gaming",
    icon: <GrGamepad size={iconSize} />,
    path: "/gaming",
    pathName: "GAMING",
  },
  {
    title: "news",
    icon: <PiNewspaper size={iconSize} />,
    path: "/news",
    pathName: "NEWS",
  },
  {
    title: "Sports",
    icon: <IoTrophyOutline size={iconSize} />,
    path: "/sports",
    pathName: "SPORTS",
  },
  {
    title: "Fashion and Beauty",
    icon: <GiHanger size={iconSize} />,
    path: "/fashion-and-beauty",
    pathName: "FASHION_AND_BEAUTY",
  },
];
