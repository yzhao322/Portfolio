import React from "react";
import "./style.css";

function ContactContent(props) {
  return (
    <div className="content">
      <div className="row">
        <div className="col-sm-12">
          <p>Name</p>
          <input className="smallblock" placeholder="Yan Zhao"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>Email</p>
          <input className="smallblock" placeholder="yzhao322@gmail.com"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>Message</p>
          <textarea className="biggerblock"></textarea><br></br>
          <button className="submitbuttom">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
