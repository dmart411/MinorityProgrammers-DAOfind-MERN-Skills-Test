import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div
      className="ui sidebar visible vertical labeled icon menu"
      style={{ position: "fixed" }}
    >
      {SidebarData.map((value, key) => {
        return (
          <Link
            to={value.link}
            key={key}
            className={`${
              location.pathname === value.link ? "active teal" : ""
            } item`}
          >
            {value.title}
            {value.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
