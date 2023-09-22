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
function App() {
  const [user, setUser] = useState({}); // Initialize user as an empty object

  useEffect(()=>{
    let user ={}
    if(localStorage.getItem('user-info')){
      user = localStorage.getItem('user-info')
      setUser(user)
    }

  })
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <header id="mainHeader" className="mainHeader clearfix posR">
          <Header></Header>
        </header>
        <Routes>
          {/* <Route path="/" Cmp={Product} element={<Protected />}>
            <Route exact  path="/product" element={<Product />} ></Route>
          </Route> */}

          <Route path="/" element={<Protected />}>
            <Route path="/products" element={<ProtectedRole user={user} roles={['admin','kho']} />}></Route>
            <Route path="/customer" element={<Register />} />
            <Route path="/kho" element={<Register />} />
          </Route>
          {/*           
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product"></Route>
          <Protected path="/protected" element={<Product />} />

          <Route path="/customer" element={<Register />} />
          <Route path="/kho" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
