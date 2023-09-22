import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRole(props) {
  const user = true;
  const listRoles = props.roles

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

export default ProtectedRole;
