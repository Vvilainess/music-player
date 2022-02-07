import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarMenu = [
    {
        title: "home",
        path: "/",
        cName: "nav-text",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "reports",
        path: "/reports",
        cName: "nav-text",
        icon: <IoIcons.IoIosPaper />,
    },
    {
        title: "products",
        path: "/products",
        cName: "nav-text",
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: "team",
        path: "/team",
        cName: "nav-text",
        icon: <IoIcons.IoIosPeople />,
    },
    {
        title: "messages",
        path: "/messages",
        cName: "nav-text",
        icon: <FaIcons.FaEnvelopeOpenText />,
    },
    {
        title: "support",
        path: "/support",
        cName: "nav-text",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
