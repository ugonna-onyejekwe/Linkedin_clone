import "./profile.scss";
import profile_img from "../../assets/profile_img.jpg";
import { FaCamera } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { MdBarChart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiRobotAntennas } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

// swiper

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Ad } from "../../components/advert";
import { Ad2 } from "../../components/advert2";

export const Profile = () => {
  const [showfulltxt, setShowfulltxt] = useState(false);
  return (
    <div className="profile_con">
      <div className="container">
        <div className="main_content">
          <div className="box1">
            <div className="img_wrapper">
              <span>
                <FaCamera />
              </span>
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
            </div>

            <div className="txt_con">
              <div className="edit">
                <span>
                  <MdEdit />
                </span>
              </div>
              <div className="txt">
                <h4>
                  ugona onyejekwe{" "}
                  <button>
                    <span>
                      <MdOutlineVerified />
                    </span>
                    <span className="name"> verify now</span>
                  </button>
                </h4>
                <h5>frontend developer</h5>
                <p>
                  <span>oge enterprice - </span> lagos state, Nigera -{" "}
                  <span className="thick">contact info</span>
                </p>
                <p>
                  <span className="thick">212 connects</span>
                </p>
                <div className="btns">
                  <button>open to </button>
                  <button>add profile section</button>
                  <button>
                    <span>
                      <BsThreeDots />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/*  */}

            {/* <div
              className="swiper_con Swiper"
              modules ={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
            >
              <SwiperSlide className="box">
                <h5>open to work</h5>
                <p>Frontend Developer role</p>
                <a href="#">show details</a>
              </SwiperSlide>

              <SwiperSlide className="box">
                <h5>showcase service</h5>
                <p>
                  Showcase your service and business so that it can be found in
                  search
                </p>
                <a href="#">get started</a>
              </SwiperSlide>
              <SwiperSlide className="box">
                <h5>share that you are hiring</h5>
                <p>To attract qualified candidates</p>
                <a href="#">get started</a>
              </SwiperSlide>
                      </div> */}

            {/*  */}
          </div>

          <div className="box2">
            <div className="heading">
              <h5>analytics</h5>
              <p>
                <span>
                  <MdVisibility />
                </span>{" "}
                private to you
              </p>
            </div>

            <div className="col">
              <div className="box">
                <span>
                  <TiGroup />
                </span>

                <div className="txt">
                  <h5>17 profile views</h5>
                  <p>Discover who viewed your profile.</p>
                </div>
              </div>

              <div className="box">
                <span>
                  <MdBarChart />
                </span>

                <div className="txt">
                  <h5>91 post impressions</h5>
                  <p>Check out who is engaging with your post</p>
                </div>
              </div>
              <div className="box">
                <span>
                  <IoSearch />
                </span>

                <div className="txt">
                  <h5>4 search appearance</h5>
                  <p>See how often you appear in search results.</p>
                </div>
              </div>
            </div>

            <button>
              show all analytics{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>

          <div className="box3">
            <div className="heading">
              <h5>resources</h5>
              <p>
                <span>
                  <MdVisibility />
                </span>{" "}
                private to you
              </p>
            </div>

            <div className="col">
              <span>
                <GiRobotAntennas />
              </span>
              <div className="txt">
                <h5>create mode</h5>
                <p>
                  Get discovered, showcase content on your profile, and get
                  access to create tools
                </p>
              </div>
            </div>
            <div className="col">
              <span>
                <TiGroup />
              </span>
              <div className="txt">
                <h5>my network</h5>
                <p>see and manage your connections and interests.</p>
              </div>
            </div>

            <button>
              show all 5 resources{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>

          <div className="box4">
            <h5>
              about{" "}
              <span>
                <MdEdit />
              </span>
            </h5>
            <p
              className={showfulltxt ? "active" : ""}
              onClick={() => setShowfulltxt(!showfulltxt)}
            >
              As a passionate frontend developer, I bring a versatile skill set
              to the table. Proficient in HTML, CSS, and JavaScript, I
              specialize in crafting seamless and visually stunning web
              experiences. My expertise extends to the realm of JavaScript
              frameworks, with a particular focus on React.js, enabling me to
              build dynamic and responsive applications. <small>...</small>{" "}
              <span>
                In addition to my technical prowess, I excel in integrating REST
                APIs, ensuring robust and efficient communication between web
                applications and servers. Responsive web design is not just a
                practice for me; it's a commitment to delivering optimal user
                experiences across devices. Beyond the code, I take pride in
                maintaining a clean and organized codebase, a reflection of my
                dedication to quality and best coding practices. Eager to
                contribute to innovative projects and create digital experiences
                that captivate and delight users, I am excited about the endless
                possibilities that frontend development offers.
              </span>
            </p>
          </div>

          <div className="box5">
            <div className="heading">
              <h5>experience</h5>
              <div className="icon_con">
                <span>
                  <FaPlus />
                </span>
                <span>
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className="col">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>

              <div className="txt_con">
                <h4>frontend web developer | internship</h4>
                <h5>
                  oge enterprise - <span>full time</span>
                </h5>
                <p>jul 2023 - present - 8 mons</p>
                <p>lagos state, nigeria - remote</p>
              </div>
            </div>
            <div className="col">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>

              <div className="txt_con">
                <h4>frontend web developer | internship</h4>
                <h5>
                  best tech limited - <span>full time</span>
                </h5>
                <p>aug 2022 - present - 8 mons</p>
                <p>enugu state, nigeria - remote</p>
              </div>
            </div>
          </div>

          <div className="box6">
            <div className="heading">
              <h5>education</h5>
              <div className="icon_con">
                <span>
                  <FaPlus />
                </span>
                <span>
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className="col">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <div className="txt_con">
                <h4>university of nigeria, nsukka</h4>
                <h5>Bachelor's degree, computer science</h5>
                <p>jan 2021 - aug 2024</p>
              </div>
            </div>
            <div className="col">
              <div className="img_con">
                <img src={profile_img} alt="img" />
              </div>
              <div className="txt_con">
                <h4>freecodecamp</h4>
                <h5>web development</h5>
                <p>jan 2022 </p>
              </div>
            </div>
          </div>

          <div className="box7">
            <div className="heading">
              <h5>skill</h5>
              <div className="icon_con">
                <span>
                  <FaPlus />
                </span>
                <span>
                  <MdEdit />
                </span>
              </div>
            </div>

            <div className="wrapper">
              <h5>html5</h5>
              <h5>css</h5>
              <h5>boostrap</h5>
              <h5>javaScript</h5>
              <h5>sass</h5>
              <h5>reactjs</h5>
              <h5>typescript</h5>
              <h5>redux toolkit</h5>
              <h5>rest api</h5>
              <h5>git and version control</h5>
            </div>
          </div>
        </div>
        <div className="side_content">
          <Ad2 />

          <Ad />
        </div>
      </div>
    </div>
  );
};
