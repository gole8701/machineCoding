import React, { useState, useEffect } from "react";
import { nameList } from "./constants";
import Profile from "./profile";
import styles from "./styles.module.css";

const MESSAGE_LIMIT = 10;
function LiveChat() {
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    let id = setInterval(fetchDetails, 1000);
    return () => clearInterval(id);
  }, []);

  function generate() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }

  const handleAdminInput = ()=>{
    const adminInput ={
        name: 'Admin',
        photo: 'https://lh3.googleusercontent.com/ogw/AF2bZyiwWe7ScMWsV19oCN8UCUDReP2It4LuPDmElrx-NjzfZPa3=s64-c-mo',
        message: userInput,
      };
      setChats((prev)=> [adminInput, ...prev]);
      setUserInput('')
  }
// console.log(userInput, "userInput");
  const fetchDetails = () => {
    const newData = [
      {
        name: generate(),
        photo: "https://yt4.ggpht.com/Nx8oW3lP_ajOhNnpL7jRLDKYG4k996rxTDPaai1anPG5vvac_dMGsz9TeTvUf7BoSylYIo7A=s64-c-k-c0x00ffffff-no-rj",
        message: "Hi this is new message",
      },
    ];
    setChats((prev) => [...newData, ...prev].splice(0, MESSAGE_LIMIT));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdminInput();
    }
  };

  return (
    <div className={styles.liveChat}>
        <div className={styles.chatsTexts}>
        {chats.map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
        </div>
        <div className={styles.adminInput}>
       <input onKeyPress={handleKeyPress} value={userInput}  type ='text' onChange={(e)=>setUserInput(e.target.value)}/> 
       <button onClick={handleAdminInput}>Send</button>
        </div>
    </div>
  );
}

export default LiveChat;
