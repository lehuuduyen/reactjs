import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected(props) {
  const user = true;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

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
