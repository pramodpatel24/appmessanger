import { FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import FlipMove from 'react-flip-move';
import id from './App.js';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //firebase listner doc->docLoop->doc.data;
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('please Enter Username'));
  }, [])


  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img style={{ width: 100, height: 100 }} src='https://logodownload.org/wp-content/uploads/2017/04/facebook-messenger-logo-01-1.png' alt='img' />

      <h1>Facebook Messanger</h1>

      <h3>Hello: {username}</h3>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel>type a message...</InputLabel>
          <Input className="input" value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon /></IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          // eslint-disable-next-line array-callback-return
          messages.map(({ message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;


// useState == variable in React;
// useEffect == Run code on a condition in React;