import { FcGoogle } from "react-icons/fc";
// import { Input_field } from "../../components/inputfield/input";
import "./signup.scss";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebase_config/firebase";
import { useNavigate } from "react-router-dom";

export const Sign_up = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const usersRef = collection(database, "qualified-users");


  const signUp = async () => {
    try {
      const userCreatedSuccessful = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(usersRef, {
        email: email,
        firstname: firstname,
        lastname: secondname,
      });
      if (userCreatedSuccessful) {
        navigate("/home");
      }
    } catch (err) {
      alert(err);
    }
  };

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
                <label htmlFor="email">first name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>

              <div className="box">
                <label htmlFor="email">second name</label>
                <input
                  type={"text"}
                  value={secondname}
                  onChange={(e) => setSecondname(e.target.value)}
                  required
                />
              </div>

              <div className="box">
                <label htmlFor="email">email</label>
                <input
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="box">
                <label htmlFor="email">password (6+ character)</label>
                <div className="password_con">
                  <input
                    type={showpass ? "text" : "password"}
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowpass(!showpass);
                    }}
                  >
                    {showpass ? "hide" : "show"}
                  </button>
                </div>
              </div>
            </div>

            <div className="policy">
              By clicking Agree & Join or Continue, you agree to the LinkedIn
              <span> User Agreement</span>, <span>Privacy Policy</span>, and{" "}
              <span>Cookie Policy</span>.
            </div>

            <button className="btn" onClick={signUp}>
              agree & join
            </button>
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
