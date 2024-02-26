import { useState } from "react";
interface Inputprops {
  type: string;
}

export const Input_field = (props: Inputprops) => {
  const [showpass, setShowpass] = useState(false);
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");

  if (props.type === "password") {
    return (
      <div className="password_con">
        <input
          type={showpass ? "text" : "password"}
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button onClick={() => setShowpass(!showpass)}>
          {showpass ? "hide" : "show"}
        </button>
      </div>
    );
  } else {
    return (
      <input
        type={props.type}
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      />
    );
  }
};

export const Normal_input = ({}) => {};
