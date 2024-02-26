import "./home.scss";
import profile_img from "../../assets/profile_img.jpg";
import { FaBookmark } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { posts } from "../../global/data/data";
import { Post_con } from "../../components/post_con";

export const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="container">
        {/* left side bar */}
        <div className="left_side">
          <div className="part1">
            <div className="img_con">
              <img src={profile_img} alt="profile_img" />
            </div>
            <div className="txt_con">
              <div className="txt">
                <Link to="/profile">ugonna onyejekwe</Link>
                <p>frontend developer</p>
              </div>

              <div className="col1">
                <p>
                  profile viewer <span>19</span>
                </p>
                <p>
                  post impressions <span>219</span>
                </p>
              </div>
              <div className="col2">
                <span>
                  <FaBookmark />
                </span>
                <h3>my items</h3>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="col">
              <small>recently jioned</small>
              <p>
                <span>
                  <HiUserGroup />
                </span>
                react native
              </p>
            </div>
            <div className="col">
              <small>groups</small>
              <p>
                <span>
                  <HiUserGroup />
                </span>
                react native
              </p>
              <p>
                <span>
                  <HiUserGroup />
                </span>
                javaScript
              </p>
              <p>
                <span>
                  <HiUserGroup />
                </span>
                programming hub
              </p>

              <button>show more</button>
            </div>
            <div className="action_btns">
              <Link to="#">
                event
                <span>
                  <FaPlus />
                </span>
              </Link>
              <Link to="#">followed hashtag</Link>
            </div>

            <button className="dicovermore">discover more</button>
          </div>
        </div>

        {/* center content */}
        <div className="center_part">
          <div className="box_con">
            <div className="col1">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <input type="text" placeholder="start a post" />
            </div>
            <div className="col2">
              <button>
                {" "}
                <span>
                  <FaImage />
                </span>
                media
              </button>
              <button>
                <span>
                  <MdOutlineEventNote />
                </span>
                event
              </button>
              <button>
                {" "}
                <span>
                  <RiArticleFill />
                </span>
                write article
              </button>
            </div>
          </div>

          {posts.map((post) => {
            return <Post_con post={post} />;
          })}
        </div>

        {/* right content */}
        <div className="right_side">
          <div className="box_con">
            <h3>add to your feed</h3>
            <div className="box">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <div className="txt_con">
                <h4>onyiye christian</h4>
                <p>frontend engineer | enterprenuer</p>
                <button>
                  <span>
                    <FaPlus />
                  </span>{" "}
                  follow
                </button>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <div className="txt_con">
                <h4>onyiye christian</h4>
                <p>frontend engineer | enterprenuer</p>
                <button>
                  <span>
                    <FaPlus />
                  </span>{" "}
                  follow
                </button>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <div className="txt_con">
                <h4>onyiye christian</h4>
                <p>frontend engineer | enterprenuer</p>
                <button>
                  <span>
                    <FaPlus />
                  </span>{" "}
                  follow
                </button>
              </div>
            </div>
          </div>
          <button className="recommend_btn">View all recommendations </button>
        </div>
      </div>
    </div>
  );
};
