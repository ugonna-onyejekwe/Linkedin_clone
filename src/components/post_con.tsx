import { IoIosMore } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { FaHandsClapping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { Img_con } from "./img_con";
import { Video_con } from "./video-con";
import { useState } from "react";

interface post_conprops {
  mutual_friend: {
    img: any;
    name: string;
    action: string;
  };
  poster: {
    img: any;
    name: string;
    carrer: string;
    time_posted: string;
    txt_message: string;
    post: {
      img: any;
      video: any;
    };
    likes: string;
    repost: string;
    following: boolean;
  };
}

export const Post_con = (props: any) => {
  let post: post_conprops = props.post;
  const [readmore, setReadmore] = useState(false);

  return (
    <div className="post_container">
      <div className="mutual_friend_con">
        <div className="col1">
          <div className="img_con">
            <img src={post.mutual_friend.img} alt="img" />
          </div>
          <div className="txt_con">
            <h4>{post.mutual_friend.name}</h4>
            <p>{post.mutual_friend.action}</p>
          </div>
        </div>

        <div className="col2">
          <span>
            <IoIosMore />
          </span>

          <span>
            <IoMdClose />
          </span>
        </div>
      </div>

      <div className="poster_con">
        <div className="avater_wrapper">
          <div className="col1">
            <div className="img_con">
              <img src={post.poster.img} alt="img" />
            </div>

            <div className="txt">
              <h4>{post.poster.name}</h4>
              <p>{post.poster.carrer}</p>
              <p>{post.poster.time_posted}</p>
            </div>
          </div>

          <div className="col2">
            {post.poster.following === false ? (
              <button>
                <span>
                  <FaPlus />
                </span>
                follow
              </button>
            ) : null}
          </div>
        </div>

        <div className="txt_con">
          <p onClick={() => setReadmore(!readmore)}>
            {!readmore && post.poster.txt_message.length > 200
              ? `${post.poster.txt_message.slice(0, 200)}  
                  ...see more
                `
              : post.poster.txt_message}{" "}
          </p>
        </div>

        <div className="media_section">
          {post.poster.post.video ? (
            <Video_con video={post.poster.post.video} />
          ) : (
            <Img_con img={post.poster.post.img} />
          )}
        </div>
      </div>

      <div className="action_section">
        <div className="col1">
          <div className="emojies">
            <span>
              <IoIosThumbsUp />
            </span>
            <span>
              <IoIosHeart />
            </span>
            <span>
              <FaHandsClapping />
            </span>
          </div>
          <p>{post.poster.likes}</p>
        </div>

        <div className="col2">{post.poster.repost}</div>
      </div>

      <div className="btns">
        <button>
          <span>
            <IoIosThumbsUp />
          </span>
          like
        </button>
        <button>
          <span>
            <MdOutlineInsertComment />
          </span>
          comment
        </button>
        <button>
          <span>
            <BiRepost />
          </span>
          repost
        </button>
        <button>
          <span>
            <BsSend />
          </span>
          send
        </button>
      </div>
    </div>
  );
};
