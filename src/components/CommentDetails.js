import React from "react";

const CommentDetails = props => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
