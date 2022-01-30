import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./views/Blogs";
import Homepage from "./views/Homepage";
import Navbar from "./views/Navbar";
import { selectSignedIn } from "./controller/userSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
