import Link from "next/link";
import { Menu } from "@headlessui/react";

import { UserIcon } from "@heroicons/react/24/outline";
import { headerRightItems } from "../../utils/headerRightItems";

import { useContext } from "react";
import { MenuContext } from "../../contexts/Menu.context";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  const { setOpen } = useContext(MenuContext);
  return (
    <nav className="w-full bg-gray-800 shadow fixed">
      <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex space-x-3 items-center justify-center">
          <button onClick={() => setOpen(true)}>
            <CgMenu className="h-8 w-8 text-gray-50" />
          </button>
          <Link href={"/"}>
            <a>
              <span className="text-3xl text-gray-50">Admin</span>
            </a>
          </Link>
        </div>
        <div className="relative">
          <Menu>
            <Menu.Button className="flex px-10 py-2 border-gray-50 border-2 space-x-3 text-gray-50  rounded-md">
              <UserIcon className="h-5 w-5 " />
              <span>Account</span>
            </Menu.Button>
            <Menu.Items
              as="div"
              className="absolute top-full bg-gray-600 w-full flex space-y-2 flex-col "
            >
              {headerRightItems.map(({ title, icon }, index) => (
                <Menu.Item key={index}>
                  <Link href="/">
                    <a className="flex p-4 hover:bg-gray-500 text-gray-50 space-x-3">
                      <span>{icon}</span>
                      <span>{title}</span>
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
