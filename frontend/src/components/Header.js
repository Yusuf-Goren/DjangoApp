import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import About from "../pages/About";

export const Header = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Header;
