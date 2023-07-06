import { UserIcon, LogoutIcon } from "@heroicons/react/24/outline";
import { BsMenuDown } from "react-icons/bs";

export const headerRightItems = [
  {
    title: "Profile",
    icon: <UserIcon className="h-6 w-6" />,
  },

  {
    title: "Logout",
    icon: <BsMenuDown className="h-6 w-6" />,
  },
];
