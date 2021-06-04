import React from 'react';
import config from './config';
import io from 'socket.io-client';

import styled from '@emotion/styled'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: '',
      name: '',
    };


  }




  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState((state) => ({
        chat: [...state.chat, ...msgReversed],
      }), this.scrollToBottom);
    });

    this.socket.on('push', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  handleContent(stuff) {
    this.setState({
      content: stuff,
    });
  }

  //
  handleName = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name === ""){
      this.state.name = "Anonymous";
    }
    this.socket.emit('message', {
      name: this.state.name,
      content: this.state.content,
    });

    this.setState((state) => {
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
        }],
        content: '',
      };
    }, this.scrollToBottom);
  }

  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  render() {
    const List = styled('ul')`
      list-style: none;
      padding: 0;
    `; 
    
    const Bubble = styled.div`
      border-radius: 20px;
      padding: 8px 15px;
      margin-top: 5px;
      margin-bottom: 5px;
      display: inline-block;
      background-color: #EEE;
    `;

    const Input = styled.input`
      border-radius: 20px;
      padding: 8px 15px;
      margin-top: 5px;
      margin-bottom: 5px;
      display: inline-block;
      border-color: black;

    `;
    return (
      <div className="App">
        <List id="chat" elevation={3}>
          {this.state.chat.map((el, index) => {
            return (
              <div key={index}>
                
                <Bubble variant="body1" className="content">
                <p variant="caption" className="name" style={{fontSize: 12}}>
                  {el.name}
                </p>
                  {el.content}
                </Bubble>
              </div>
            );
          })}
        </List>




      <div position="fixed" className="appbar">
      <div>
        <div className="classes.inputContainer" style={{maxWidth: '200px'}}>
          
        <input style={{borderRadius: 20, padding: 8, marginTop: 5, marginBottom: 5, display: "inline-block", borderColor: "black"}}
            onChange={this.handleName}
            value={this.state.name}
            placeholder="Name"
            type="text"
            inputProps={{ 'aria-label': 'name' }}
          />
        </div>
        <div className="inputContainer">
          <form onSubmit={this.handleSubmit} value={this.state.content}>
            
            <input style={{borderRadius: 20, padding: 8, marginTop: 5, marginBottom: 5, display: "inline-block", borderColor: "black"}}
              onChange={e => this.handleContent(e.target.value)}
              value = {this.state.content}
              placeholder="Type your message..."
              
              inputProps={{ 'aria-label': 'content' }}
              />
          </form>
        </div>
      </div>
    </div>
      </div>
    );
  }
};

export default App;
