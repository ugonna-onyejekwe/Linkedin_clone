import "./message.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { ImEqualizer } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import { Ad2 } from "../../components/advert2";

export const Messages = () => {
  return (
    <div className="message_con">
      <div className="container">
        <div className="main_content">
          <div className="heading">
            <h5>message</h5>
            <div className="action_btn">
              <span>
                <HiDotsHorizontal />
              </span>
              <span>
                <FiEdit />
              </span>
            </div>
          </div>
          <div className="nav">
            <div className="search_con">
              <span>
                <IoSearch />
              </span>
              <input type="search" placeholder="Search Message" />
              <span>
                <ImEqualizer />
              </span>
            </div>
            <div className="links">
              <NavLink to={"focused-message"}>focused</NavLink>
              <NavLink to={"other-message"}>other</NavLink>
            </div>
          </div>

          <div className="wrapper">
            <Outlet />
          </div>
        </div>
        <div className="side_bar">
          <Ad2 />
        </div>
      </div>
    </div>
  );
};
