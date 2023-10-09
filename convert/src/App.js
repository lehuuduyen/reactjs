import "./App.css";
// f59178ab70df48bc83797911eebc20d9

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";
//react-router
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Convert from "./components/Convert";
import Blog from "./components/blog";
export default class App extends Component {
  render() {
    return (
      <>
      
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/convert" element={<Convert />} />
            <Route path="/" element={<Blog />} />
            <Route
              path="/blog"
              element={
                <Blog
                  key={"business"}
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/news"
              element={
                <News
                  key={"business"}
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            {/* <Route exact path="/Science">
              <News
                key={"science"}
                pageSize={9}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key={"entertainment"}
                pageSize={9}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                key={"sports"}
                pageSize={9}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Tech">
              <News
                key={"tech"}
                pageSize={9}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/Health">
              <News
                key={"health"}
                pageSize={9}
                country="in"
                category="health"
              />
            </Route> */}
          </Routes>
        </BrowserRouter>
        <Outlet></Outlet>
      </>
    );
  }
}
