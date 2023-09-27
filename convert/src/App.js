import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Convert from "./Convert";
function App() {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <header id="mainHeader" className="mainHeader clearfix posR">
          <Header></Header>
        </header>
        <Routes>
          <Route path="/convert" element={<Convert />} />
          <Route path="/" element={<Convert />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
