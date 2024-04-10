import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "New Client",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "customer_list",
    title: "Client List",
    type: "item",
    icon: <Icon.List size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/customers"
  },
  {
    id: "settings",
    title: "Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/settings"
  },
  {
    id: "sessions",
    title: "Previous Sessions",
    type: "item",
    icon: <Icon.Clock size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/sessions"
  },
  {
    id: "past_sessions",
    title: "Sessions",
    type: "item",
    icon: <Icon.Clock size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/past_sessions"
  }
]

export default navigationConfig