import React from 'react';
import { useState } from "react";
import axios from "axios";

const ContactMail = () => {
    const [send,setSend] =useState(false);
    const [text,setText] =useState("");
    
    const handleSend =async()=>{
      setSend(true)
      try {
        await axios.post("http://localhost:5000/send_mail",{
          text
        })
      } catch (error) {
      console.log(error);  
      }
    }
  
  

    return (
        <div>
                
            <form onSubmit="handleSend">
              <input type="text" value="text" onChange={(e)=>setText(e.target.value)} />
              <button type="submit">send mail</button>
            </form>
            
        </div>
    );
};

export default ContactMail;