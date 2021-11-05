import React from "react";

class Message extends React.Component{

  render() {
    return (
        <div className="message">{this.props.msg}</div>
    )
  }
}

export default Message;