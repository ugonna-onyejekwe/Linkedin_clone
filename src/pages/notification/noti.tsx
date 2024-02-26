import { Link } from "react-router-dom";
import { Ad } from "../../components/advert";
import { MdOutlineSettings } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";

import img from "../../assets/profile_img.jpg";
import "./noti.scss";

export const Notification = () => {
  return (
    <div className="noti_container">
      <div className="container">
        <div className="main_content">
          <div className="nav">
            <div className="links">
              <Link to={"#"} className="active">
                all
              </Link>
              <Link to={"#"}>my post</Link>
              <Link to={"#"}>mentions</Link>
            </div>

            <div className="settings_con">
              <span>
                <MdOutlineSettings />
              </span>
            </div>
          </div>

          <div className="wrapper">
            <div className="box unread">
              <div className="part1">
                <div className="img_con">
                  <img src={img} alt="" />
                  <span className="active_status"></span>
                </div>
                <div className="txt_con">
                  <p>
                    <span>crossover</span> and 9 other's posts received comments
                    that may interest you.
                  </p>
                </div>
              </div>
              <div className="part2">
                <p>19m</p>
                <span>
                  <HiDotsHorizontal />
                </span>
              </div>
            </div>

            <div className="box unread">
              <div className="part1">
                <div className="img_con">
                  <img src={img} alt="" />
                  <span className="active_status"></span>
                </div>
                <div className="txt_con">
                  <p>
                    <span>30+</span> opportunities in <span>Nigeria</span>
                  </p>
                  <button>view jobs</button>
                </div>
              </div>
              <div className="part2">
                <p>30m</p>
                <span>
                  <HiDotsHorizontal />
                </span>
              </div>
            </div>

            <div className="box unread">
              <div className="part1">
                <div className="img_con">
                  <img src={img} alt="" />
                  <span className="active_status"></span>
                </div>
                <div className="txt_con">
                  <p>
                    <span>ali sajad alimid</span> posted: Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Natus voluptate
                    blanditiis illum. Quidem velit facilis accusantium maiores
                    nemo .
                  </p>
                </div>
              </div>
              <div className="part2">
                <p>55m</p>
                <span>
                  <HiDotsHorizontal />
                </span>
              </div>
            </div>

            <div className="box ">
              <div className="part1">
                <div className="img_con">
                  <img src={img} alt="" />
                </div>
                <div className="txt_con">
                  <p>
                    <span>guegouo m. guiddel</span> viewd your profile. see all
                    views
                  </p>
                </div>
              </div>
              <div className="part2">
                <p>1h</p>
                <span>
                  <HiDotsHorizontal />
                </span>
              </div>
            </div>

            <div className="box ">
              <div className="part1">
                <div className="img_con">
                  <img src={img} alt="" />
                </div>
                <div className="txt_con">
                  <p>
                    <span>front end developer: 2 </span> opportunities in{" "}
                    <span>nigeria</span>
                  </p>
                  <button>view jobs</button>
                </div>
              </div>
              <div className="part2">
                <p>2h</p>
                <span>
                  <HiDotsHorizontal />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="side_bar">
          <Ad />
        </div>
      </div>
    </div>
  );
};
