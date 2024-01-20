import { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
// import SendIcon from "@mui/icons-material/Send";
// import { IconButton } from '@mui/material';// or
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

import db from "./firebase";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  const [messages, setMessages] = useState([
    { username: "Ahmed", message: "hello" },
    { username: "samy", message: "hi everyone" },
  ]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  useEffect(() => {
    console.log("first>>>>>>");
    setUsername(prompt("Please enter your name "));
  }, []);

  useEffect(() => {
    console.log("second>>>>>>");

    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  // console.log(messages);
  return (
    <>
    <img style={{borderRadius:"50%"}} width={100} src="/images/fbmessenger_logo.original.jpg"/>
      <h1>Welcome to Messanger : {username}</h1>
      <form className="app_form">
        <FormControl className="app-formControl">
          {/* <InputLabel>Enter A Message...</InputLabel> */}
          <Input className="app-input" placeholder="Enter a Message ..." value={input} onChange={(e) => setInput(e.target.value)} />

          {/* <IconButton
            disabled={!input}
            type="submit"
            color="primary"
            onClick={sendMessage}
            variant="outlined"
            className="app_button"
          ></IconButton> */}

          <Button className="app-button"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            sendMessage
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </>
  );
}

export default App;
