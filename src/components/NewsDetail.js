import React, { Component } from "react";
import set from "./set.jpeg"
export default class NewsDetail extends Component {
  constructor() {
    super();
    console.log("hello");
  }
  render() {
    let { title, description, imgUrl, newsUrl,date ,author} = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "258px", height: "450px" }}>
          <img
            src={
              !imgUrl
                ?set
                : imgUrl
            }
            className="card-img-top"
            alt="..."
            style={{width:"258px" , height:"170px"}}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6 clssName="card-text text-muted" style={{fontSize:"11px"}}><small>by {!author?"Unknown":author} {"Last Updated:"+new Date(date).toGMTString()}</small></h6>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
