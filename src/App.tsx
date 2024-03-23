import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Sign_up } from "./pages/login/signup";
import { Nav_bar } from "./global/navbar/navbar";
import { Home } from "./pages/home/home";
import { Network } from "./pages/network/network";
import { Jobs } from "./pages/jobs/jobs";
import { Messages } from "./pages/message/message";
import { Focused_msg } from "./components/focused-msg";
import { Other_msg } from "./components/other-msg";
import { Notification } from "./pages/notification/noti";
import { Profile } from "./pages/profile/profile";

function App() {
  return (
    <>
      <Nav_bar />
      <Routes>
        <Route index element={<Navigate to="sign_up" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />}>
          <Route index element={<Navigate to="focused-message" replace />} />
          <Route path="focused-message" element={<Focused_msg />} />
          <Route path="other-message" element={<Other_msg />} />
        </Route>
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<Sign_up />} />
      </Routes>
    </>
  );
}

export default App;
