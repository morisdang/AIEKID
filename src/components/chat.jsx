import { useEffect, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { chatGPT_API } from "./helper/Helper";
import './scss/chat.scss'
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
  InputToolbox,
  AttachmentButton,
  SendButton,
} from "@chatscope/chat-ui-kit-react";

import {apiChat} from '../ConnectBE/axios'
import { getCookie } from "../utils/common";
function Chatbot() {

  const [thinking, setThinking] = useState(false);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Xin chào! Mình là Hamsbo, mình có thể giúp gì cho bạn?",
      sender: "ChatGPT",
    },
  ]); // []
  useEffect(() => {
    let family_name =  getCookie("family_name")
    let given_name =  getCookie("given_name")
    let name = family_name + " " + given_name
    setName(name)

  }, []);
  const handleSend = async (message) => {

    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage]; // all the old messages , + new message

    // update the messages useState
    setMessages(newMessages);

    // Setting a typing indicator (chatgpt is thinking)
    setThinking(true);

    // Process the message to CHATGPT (and wait for response )
    processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // chat Messages { sender :"user" or "ChatGPT", message : "the message content here"}
    // api Messages { role: "user" or "assistant" content :"the message content here"}

    // call api apiChat with chatMessages to get a response from Gemini

    let lastMessage = chatMessages[chatMessages.length - 1]
    const savedImage = localStorage.getItem('cachedImage');
    // convert base64 to file
    const file = new File([savedImage], 'image.png', {type: 'image/png'});
    // Mark number in begin of message
    const context = chatMessages
    .filter((message) => message.sender === "user")
    .map((message, index) => `${index + 1}. ${message.message}`)
    .join("\n");
  
  console.log(context);
    apiChat({data: {
        name: name,
        context: lastMessage.message,
        question: lastMessage.message
    }, image: file}).then((response) => {
        setMessages([
            ...chatMessages, {
              message: response,
              sender: "ChatGPT"
            }
          ]);
          setThinking(false);
    }).catch((error) => {
        console.log(error)
    })

  }

  return (
    <div className="chatbot-wrapper" >
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              thinking ? (
                <TypingIndicator content="Đợi Hamsbo một lát nhé :>>" />
              ) : null
            }
          >
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            placeholder="Type messages here"
            onSend={handleSend}
          />

        </ChatContainer>
      </MainContainer>

    </div>

  );
}

export default Chatbot;
