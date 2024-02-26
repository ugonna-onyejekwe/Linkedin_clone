import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

// icons
import { FaLinkedin } from "react-icons/fa";
import { IoSearch, IoHome } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";

// img
import profile_img from "../../assets/profile_img.jpg";
import { useState } from "react";

export const Nav_bar = () => {
  const { location: any }: any = useLocation();
  const [dropdown, setDropdown] = useState(false);

  const { pathname } = location;

  window.addEventListener("click", (e): any => {
    console.log(e.target);
    // e.target !==
  });

  const shownav = {
    display: "block",
  };
  const hidenav = {
    display: "none",
  };

  return (
    <nav style={pathname === "/login" || "sign_in" ? shownav : hidenav}>
      <div className="container">
        <div className="part1">
          <div className="col1">
            <div className="logo">
              <Link to={"/"}>
                <span>{<FaLinkedin className="icon" />}</span>
              </Link>
            </div>
            <div className="search_con">
              <IoSearch />
              <input type="search" name="search" id="search" />
            </div>
          </div>
          <div className="col2">
            <div className="links">
              <NavLink to={"/"}>
                <span>
                  <IoHome />
                </span>
                <p>home</p>
              </NavLink>

              <NavLink to={"/network"}>
                <span>
                  <HiMiniUserGroup />
                  <small>3</small>
                </span>
                <p>network</p>
              </NavLink>

              <NavLink to={"/jobs"}>
                <span>
                  <BsBriefcaseFill />
                </span>
                <p>jobs</p>
              </NavLink>

              <NavLink to={"/messages"}>
                <span>
                  <BsChatDotsFill />
                </span>
                <p>chat</p>
              </NavLink>

              <NavLink to={"/notifications"}>
                <span>
                  <IoNotificationsSharp />
                  <small>3</small>
                </span>
                <p>notifications</p>
              </NavLink>
            </div>

            <div
              className="profile_icon"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="img_con">
                <img src={profile_img} alt="profile_img" />
              </div>
              <p>
                me
                <span>
                  <IoMdArrowDropdown />
                </span>
              </p>

              <article className={dropdown ? "active" : ""}>
                <div className="col1">
                  <div className="img_con">
                    <img src={profile_img} alt="img" />
                  </div>
                  <div className="txt_con">
                    <h5>onyejekwe ugonna</h5>
                    <p>frontend developer</p>
                  </div>
                </div>
                <div className="btn">
                  <button>view profile</button>
                </div>

                <div className="account_col">
                  <h5>account </h5>
                  <p>settings & privacy</p>
                  <p>help</p>
                  <p>language</p>
                </div>
                <div className="manage_col">
                  <h5>manage</h5>
                  <p>post & activity</p>
                  <p>job post account</p>
                </div>
                <div className="sign_out_col">
                  <h5>sign out</h5>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="col1">
            <span>
              <BsGrid3X3Gap />
            </span>
            <p>
              business
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
