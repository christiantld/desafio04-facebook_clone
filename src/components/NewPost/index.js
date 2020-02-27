import React, { Component } from "react";
import "./style.css";

class NewPost extends Component {
  state = {
    author: {
      name: "Christian Toledo",
      avatar: "https://avatars3.githubusercontent.com/u/37941820?s=460&v=4"
    }
  };

  render() {
    const { author } = this.state;

    return (
      <div className="container">
        <div className="newpost">
          <img className="avatar" src={author.avatar} alt={author.name} />
          <textarea
            placeholder={`No que você está pensando, ${author.name} ?`}
            maxLength="320"
            rows="4"
            cols="50"
            className="textarea"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default NewPost;
