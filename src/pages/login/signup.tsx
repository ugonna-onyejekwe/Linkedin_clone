import { FcGoogle } from "react-icons/fc";
import { Input_field } from "../../components/inputfield/input";
import "./signup.scss";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Sign_up = () => {
  return (
    <div className="sign_up_con">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <h1>
              linked <span>{<FaLinkedin className="icon" />}</span>
            </h1>
          </div>
        </div>

        <div className="wrapper">
          <h2>Make the most of your professional life</h2>

          <form action="#">
            <div className="box_con">
              <div className="box">
                <label htmlFor="email">email or phone</label>
                <Input_field type={"text"} />
              </div>

              <div className="box">
                <label htmlFor="email">password (6+ character)</label>
                <Input_field type={"password"} />
              </div>
            </div>

            <div className="policy">
              By clicking Agree & Join or Continue, you agree to the LinkedIn
              <span> User Agreement</span>, <span>Privacy Policy</span>, and{" "}
              <span>Cookie Policy</span>.
            </div>

            <button className="btn">agree & join</button>
            <div className="divider">or</div>

            <button className="btn_alt">
              <span>{<FcGoogle />}</span>continue with google
            </button>

            <p className="signin">
              Already on LinkedIn? <Link to={"/login"}>Sign in</Link>
            </p>
            <p className="help">
              Looking to create a page for a business? <span> Get help</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
