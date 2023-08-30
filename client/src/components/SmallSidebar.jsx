import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes></FaTimes>
          </button>
          {/* <Logo></Logo> */}
          <header>
            <Logo></Logo>
            dummy logo
          </header>
         <NavLinks ></NavLinks>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;