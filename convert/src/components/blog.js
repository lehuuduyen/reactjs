import React, { Component, useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { API_BACKEND } from "../helper/config";
import axios from "axios";

function Blog() {
	const [listData, setListData] = useState([]);
	const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = API_BACKEND + `post`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        const { data, message, error } = res.data;
       if(!error){
        setListData(data)
       }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // function to handle next and previous.

  //render
  return (
    <>
      {/* headline */}
      <div className="container my-3">
        <div className="text-center headline">
          <h1 style={{ color: "red", fontSize: 35 }}>
           
          </h1>
        </div>
        {/* spinner */}
        {loading && <Loading />}
        <div className="row">
          {/* news items mapping */}
          {!loading &&
            listData.map((items, id) => {
              return (
                <div
                  className="col-md-4 col-sm-6 col-xs-12"
                  style={{ margin: "10px 0px" }}
                  key={items.url}
                >
                  <Layout>
                    <Content>
                      <NewsItem 
                        title={
                          (items.title ? items.title.slice(0, 45) : "") + ".."
                        }
                        description={
                          (items.short_description
                            ? items.short_description.slice(0, 85)
                            : "") + "..."
                        }
                        imageURL={
                          items.thumbnail
                            ? items.thumbnail
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"
                        }
                        newsURL={items.thumbnail}
                      />
                    </Content>
                  </Layout>
                </div>
              );
            })}
        </div>
      </div>
      
    </>
  );
}

export default Blog;
