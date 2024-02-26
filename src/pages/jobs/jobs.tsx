import "./jobs.scss";
import { FaBookmark } from "react-icons/fa6";
import { RiEqualizerFill } from "react-icons/ri";
import { MdStickyNote2 } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { HiStatusOnline } from "react-icons/hi";
import { useState } from "react";
import { Ad2 } from "../../components/advert2";
import img from "../../assets/bg_pattern.jpg";

export const Jobs = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className="jobs_container">
      <div className="container">
        <div className="left_side">
          {showmenu ? (
            <div>
              <div className="head">
                <h5>
                  <span>
                    <FaBookmark />
                  </span>
                  my jobs
                </h5>
                <button onClick={() => setShowmenu(!showmenu)}>
   more
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="head">
                <h5>
                  <span>
                    <FaBookmark />
                  </span>
                  my jobs
                </h5>
                <button onClick={() => setShowmenu(!showmenu)}>
                 showless
                </button>
              </div>
              <h5>
                <span>
                  <RiEqualizerFill />
                </span>
                preferences
              </h5>
              <h5>
                <span>
                  <GiCheckMark />
                </span>
                demostrate skills
              </h5>
              <h5>
                <span>
                  <MdStickyNote2 />
                </span>
                interview prep
              </h5>
              <h5>
                <span>
                  <GiNotebook />
                </span>
                resume builder
              </h5>
              <h5>
                <span>
                  <MdOutlineVideoLibrary />
                </span>
                job seeker guidance
              </h5>
              <h5>
                <span>
                  <MdOutlineSettings />
                </span>
                application setting
              </h5>
            </div>
          )}
        </div>
        <div className="center_content">
          <div className="heading">
            <h5>top job picks for you</h5>
            <p>Based on your profile and search history</p>
          </div>

          <div className="box">
            <div className="wrapper">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <h5>senior front end developer</h5>
                <small>turing</small>
                <p>Nigeria(remote)</p>
                <p className="active">
                  <span>
                    <HiStatusOnline />
                  </span>
                  actively recruiting
                </p>

                <div className="date">
                  <span>1 month ago </span> <span>13 applicant</span>
                </div>
              </div>
            </div>
            <div className="remove_icon">
              <IoClose />
            </div>
          </div>
          <div className="box">
            <div className="wrapper">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <h5>senior front end developer</h5>
                <small>turing</small>
                <p>Nigeria(remote)</p>
                <p className="active">
                  <span>
                    <HiStatusOnline />
                  </span>
                  actively recruiting
                </p>

                <div className="date">
                  <span>1 month ago </span> <span>13 applicant</span>
                </div>
              </div>
            </div>
            <div className="remove_icon">
              <IoClose />
            </div>
          </div>
          <div className="box">
            <div className="wrapper">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <h5>senior front end developer</h5>
                <small>turing</small>
                <p>Nigeria(remote)</p>
                <p className="active">
                  <span>
                    <HiStatusOnline />
                  </span>
                  actively recruiting
                </p>

                <div className="date">
                  <span>1 month ago </span> <span>13 applicant</span>
                </div>
              </div>
            </div>
            <div className="remove_icon">
              <IoClose />
            </div>
          </div>
          <div className="box">
            <div className="wrapper">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <h5>senior front end developer</h5>
                <small>turing</small>
                <p>Nigeria(remote)</p>
                <p className="active">
                  <span>
                    <HiStatusOnline />
                  </span>
                  actively recruiting
                </p>

                <div className="date">
                  <span>1 month ago </span> <span>13 applicant</span>
                </div>
              </div>
            </div>
            <div className="remove_icon">
              <IoClose />
            </div>
          </div>
        </div>
        <div className="right_side">
          <Ad2 />
        </div>
      </div>
    </div>
  );
};
