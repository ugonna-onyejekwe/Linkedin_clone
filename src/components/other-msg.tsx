import msg_img from "../assets/message-img.jpg";

export const Other_msg = () => {
  return (
    <div className="other_msg_con">
      <div className="img_con">
        <img src={msg_img} alt="img" />
      </div>
      <div className="txt_con">
        <h5>No message yet</h5>
        <p>Reach out and start a conversation to advance your career</p>
        <button>send a message</button>
      </div>
    </div>
  );
};
