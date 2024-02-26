import "./network.scss";
import { MdGroups } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { CgHashtag } from "react-icons/cg";
import { RiUserFollowLine } from "react-icons/ri";
import { VscOrganization } from "react-icons/vsc";
import { Ad } from "../../components/advert";
import img from "../../assets/profile_img.jpg";
import { people_u_might_know } from "../../global/data/data";
import { People_you_know } from "../../components/people_u_know";

export const Network = () => {
  return (
    <div className="network_container">
      <div className="container">
        <div className="side_bar">
          <div className="box_con">
            <div className="heading">
              <h4>manage my network</h4>
            </div>
            <div className="box">
              <a href="#">
                <span>
                  <VscOrganization />
                </span>
                connections
              </a>
              <p>212</p>
            </div>

            <div className="box">
              <a href="#">
                <span>
                  <RiUserFollowLine />
                </span>
                following & followers
              </a>
              <p>22</p>
            </div>

            <div className="box">
              <a href="#">
                <span>
                  <MdGroups />
                </span>
                group
              </a>
              <p>12</p>
            </div>

            <div className="box">
              <a href="#">
                <span>
                  <MdOutlineEventNote />
                </span>
                event
              </a>
              <p>10</p>
            </div>

            <div className="box">
              <a href="#">
                <span>
                  <LuNewspaper />
                </span>
                newsletter
              </a>
              <p>5</p>
            </div>

            <div className="box">
              <a href="#">
                <span>
                  <CgHashtag />
                </span>
                hashtags{" "}
              </a>
              <p>20</p>
            </div>
          </div>

          <Ad />
        </div>
        <div className="main_content">
          <div className="invitattions_con">
            <div className="heading">
              <h4>invitations</h4>
              <p>see all</p>
            </div>

            <div className="box">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <div className="txt">
                  <h5>maninder singh</h5>
                  <p>fluter || programmer || coder</p>
                </div>
                <div className="btns">
                  <button>ignore</button>
                  <button>accept</button>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <div className="txt">
                  <h5>maninder singh</h5>
                  <p>fluter || programmer || coder</p>
                </div>
                <div className="btns">
                  <button>ignore</button>
                  <button>accept</button>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="img_con">
                <img src={img} alt="img" />
              </div>
              <div className="txt_con">
                <div className="txt">
                  <h5>maninder singh</h5>
                  <p>fluter || programmer || coder</p>
                </div>
                <div className="btns">
                  <button>ignore</button>
                  <button>accept</button>
                </div>
              </div>
            </div>
          </div>

          <div className="people_u__might_know">
            <div className="heading">
              <h4>people you might know</h4>
              <p>see all</p>
            </div>

            <div className="wrapper">
              {people_u_might_know.map((person) => {
                return <People_you_know person={person} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
