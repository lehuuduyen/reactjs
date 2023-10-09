import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <Card
      hoverable
      style={{ width: '100%',    height: "100%" }}
      cover={<img alt="example" src={this.props.imageURL} />}
    >
      <Meta title={this.props.title} description={this.props.description} />
    </Card>
      // <div className="my-3">
      //   <div className="card">
      //     <img
      //       className="card-img-top"
      //       src={this.props.imageURL}
      //       alt="Card image cap"
      //     />
      //     <div className="card-body">
      //       <h5 className="card-title">{this.props.title}</h5>
      //       <p className="card-text">{this.props.description}</p>
      //       <a href={this.props.newsURL} target="_blank" className="btn btn-sm btn-primary">
      //         Read more
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default NewsItem;
