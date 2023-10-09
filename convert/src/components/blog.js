import React, { Component, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { API_BACKEND } from "../helper/config";

function Blog () {
  useEffect(()=>{
    const url = API_BACKEND + `post`;
    console.log(url);
    fetch(url).then((data)=>{
      let parsedData = data.json();
      console.log(parsedData);

    });
   
   
  },[])
  // function to handle next and previous.

  //render
    return (
      <>
        
      </>
    );
}



export default Blog;
