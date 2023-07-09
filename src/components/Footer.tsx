import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement } from "react";

import { BsListUl, BsBookmark, BsPerson } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

const Footer_Map = [
  {
    link: "/list",
    name: "방 목록",
    icon: <BsListUl />,
  },
  {
    link: "/room",
    name: "내 방",
    icon: <BsBookmark />,
  },
  {
    link: "/rank",
    name: "순위",
    icon: <HiOutlineFire />,
  },
  {
    link: "/myPage",
    name: "내정보",
    icon: <BsPerson />,
  },
];

export default function Footer() {
  const pathName = usePathname();
  const currentPath = pathName.split("/")[1];

  const isSeleted = (path: string) =>
    `/${currentPath}` === path ? "#FF8787" : "black";

  return (
    <div className="w-full h-[56px] fixed bottom-0 bg-white flex justify-around">
      {Footer_Map.map(({ link, name, icon }) => (
        <Link
          key={link}
          href={link}
          className="w-full flex flex-col items-center justify-center color-black"
        >
          {cloneElement(icon, { size: 20, color: isSeleted(link) })}
          <p className="text-black text-xs" style={{ color: isSeleted(link) }}>
            {name}
          </p>
        </Link>
      ))}
    </div>
  );
}
