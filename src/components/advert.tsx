import profile_img from "../assets/profile_img.jpg";
import { FaLinkedin } from "react-icons/fa";

export const Ad = () => {
  return (
    <section className="advert1_container">
      <h5>ad</h5>
      <p>ugonna, unlock your full potential with Linkedin premium.</p>
      <div className="img_wrapper">
        <div className="img_con">
          <img src={profile_img} alt="img" />
        </div>
        <div className="icon">
          <FaLinkedin />
        </div>
      </div>
      <h4>see who viewed your profile in the last 90 days</h4>
      <div className="btn">
        <button>try for free</button>
      </div>
    </section>
  );
};
