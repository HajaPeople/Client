import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, FC, ReactElement } from "react";

import { BsListUl, BsBookmark, BsPerson } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

interface FooterMenuProps {
  href: string;
  name: string;
  icon: ReactElement;
  selected: boolean;
}

const FooterRouter = [
  {
    href: "/list",
    name: "방 목록",
    icon: <BsListUl />,
  },
  {
    href: "/room",
    name: "내 방",
    icon: <BsBookmark />,
  },
  {
    href: "/rank",
    name: "순위",
    icon: <HiOutlineFire />,
  },
  {
    href: "/myPage",
    name: "내정보",
    icon: <BsPerson />,
  },
];

const FooterMenu: FC<FooterMenuProps> = ({ href, name, icon, selected }) => {
  const color = selected ? "#FF8787" : "black";

  return (
    <Link
      href={href}
      className="w-full flex flex-col items-center justify-center color-black"
    >
      {cloneElement(icon, { size: 20, color })}
      <p className="text-black text-xs" style={{ color }}>
        {name}
      </p>
    </Link>
  );
};

export default function Footer() {
  const pathName = usePathname();
  const currentPath = pathName.split("/")[1];

  const isSeleted = (path: string) => `/${currentPath}` === path;

  return (
    <div className="w-full h-[56px] fixed bottom-0 bg-white flex justify-around">
      {FooterRouter.map(({ href, name, icon }) => (
        <FooterMenu
          key={href}
          href={href}
          name={name}
          icon={icon}
          selected={isSeleted(href)}
        />
      ))}
    </div>
  );
}
