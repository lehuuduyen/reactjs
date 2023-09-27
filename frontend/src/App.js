import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Product from "./Products";
import Protected from "./Protected";
import ProtectedRole from "./ProtectedRole";
import { useEffect, useState } from "react";
import Customers from "./Customers";
import Kho from "./Kho";
import { Roles } from "./helper/roles";
import View403 from "./View403";
function App() {

  
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <header id="mainHeader" className="mainHeader clearfix posR">
          <Header></Header>
        </header>
        <Routes>
       

          <Route path="/" element={<Protected  />}>
            <Route path="/products" element={<ProtectedRole  roles={[Roles.admin]} view={Product} />}></Route>
            <Route path="/customer" element={<ProtectedRole  roles={[Roles.admin,Roles.kho]} view={Customers} />} />
            <Route path="/kho" element={<ProtectedRole  roles={[Roles.admin,Roles.kho]} view={Kho} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/view403" element={<View403 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
