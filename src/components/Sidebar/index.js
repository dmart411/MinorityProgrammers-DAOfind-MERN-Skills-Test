import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="ui thin sidebar visible inverted blue vertical labeled icon menu">
      <Link to="/" className="item">
        <div className="ui header">DAO FIND</div>
      </Link>
      {SidebarData.map((value, key) => {
        return (
          <Link
            to={value.link}
            key={key}
            className={`${
              location.pathname === value.link ? "active" : ""
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
