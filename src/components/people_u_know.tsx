import { RiUserFollowLine } from "react-icons/ri";

interface People_you_know_props {
  img: any;
  name: string;
  career: string;
  mutual_f: string;
}

export const People_you_know = (props: any) => {
  let person: People_you_know_props = props.person;
  return (
    <div className="box">
      <div className="img_wrapper">
        <div className="img_con">
          <img src={person.img} alt="img" />
        </div>
      </div>

      <div className="txt_con">
        <h5>{person.name}</h5>
        <p className="career">{person.career}</p>
        <p className="friend">{person.mutual_f} mutual conections</p>
        <div className="btn">
          <button>
            <span>
              <RiUserFollowLine />
            </span>
            connect
          </button>
        </div>
      </div>
    </div>
  );
};
