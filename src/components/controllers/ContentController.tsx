import { BadgeCheck, BadgeX, Bell, Grid, LineChart } from "lucide-react";
import { Colors, Navigator } from "../common/commons";
import { ContentNavigatorProps } from "../models/ContentModel";
import Statistics from "../views/Contents/Owner/pages/Statistics";
import HomePage from "../views/Contents/Owner/pages/Home";
import Suites from "../views/Contents/Owner/pages/Suites";
import Notifications from "../views/Contents/Owner/pages/Notifications";
import AvailableRooms from "../views/Contents/Owner/pages/AvailableRooms";
import RentedRoom from "../views/Contents/Owner/pages/RentedRoom";

const ContentController = (props: { value: ContentNavigatorProps }) => {
  if (props.value === Navigator.statistics) {
    return <Statistics />;
  }
  if (props.value === Navigator.suites) {
    return <Suites />;
  }
  if (props.value === Navigator.notifications) {
    return <Notifications />;
  }
  if (props.value === Navigator.available) {
    return <AvailableRooms />;
  }
  if (props.value === Navigator.rented) {
    return <RentedRoom />;
  }

  return <HomePage />;
};
export default ContentController;

export const SidebarItemsList = [
  {
    id: 1,
    title: "Statistics",
    desc: "See more about statistic",
    chart: <LineChart color={Colors.green} className="w-7 h-7" />,
  },
  {
    id: 2,
    title: "Suites",
    desc: "List of rooms in suites",
    chart: <Grid color={Colors.green} className="w-7 h-7" />,
  },
  {
    id: 3,
    title: "Notifications",
    desc: "Reports of tenants",
    chart: <Bell color={Colors.green} className="w-7 h-7" />,
  },
  {
    id: 4,
    title: "Available Rooms",
    desc: "List of available rooms",
    chart: <BadgeCheck color={Colors.green} className="w-7 h-7" />,
  },
  {
    id: 5,
    title: "Rented Rooms",
    desc: "List of rented rooms",
    chart: <BadgeX color={Colors.green} className="w-7 h-7" />,
  },
];
