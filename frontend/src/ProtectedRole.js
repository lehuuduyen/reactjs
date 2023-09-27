import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRole(props) {
  const listRoles = props.roles;
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("user-info");
    if(user){
      user = JSON.parse(user);
      if (!listRoles.includes(user.role)) {
        navigate('/view403')
      }
    }else{
      navigate('/login')
    }
   
  });

  return (
    <>
      <props.view></props.view>
    </>
  );
}

export default ProtectedRole;
