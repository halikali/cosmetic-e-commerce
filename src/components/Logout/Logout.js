import React from "react";
import TopComponent from "../TopComponent/TopComponent";
import "./Logout.scss";

const Logout = ({ onClick }) => {
  return (
    <>
      <TopComponent text={"Log out"} />
      <div className="logout-wrapper">
        <button className="logout" onClick={onClick}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Logout;
