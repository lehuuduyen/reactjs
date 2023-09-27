import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Protected(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  });

  return (
    <>
      <Outlet />
      {props.children}
    </>
  );

  // return (
  //   <div className="container form-login">

  //   </div>
  // );
}

export default Protected;
