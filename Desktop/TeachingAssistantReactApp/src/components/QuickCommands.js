import React,
{
  Component
}
from "react";

class ChatComponent extends Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }
  renderMessages()
  {
    return this.props.messages.map((message, key) =>
    {
      return <li key={key}>{message}</li>
    })
  }
  render()
  {
    return (
      <div className="chat-wrapper">
        <div id="chat-messages-box" className="chat-messages-box">
          <ul className="chat-messages-box-list">
            {this.renderMessages()}
          </ul>
        </div>
          <form className="chat-input-box" onSubmit={this.props.sendChat}>
            <input value={this.props.inputText} onChange={this.props.handleChatInputChange} type="text" id="chat-text-input" name="inputText" autoComplete="off"/>
            <button type="submit" onClick={this.props.sendChat} className="btn btn-md btn-primary">send</button>
          </form>
      </div>
    )
  }
}

export default ChatComponent;
