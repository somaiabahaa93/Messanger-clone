import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import  "./Message.css";


const Message =forwardRef( ({message,username},ref) => {
  const isUser = username === message.username
  return <>
   {/* <div style={{display:"flex",margin:"auto",justifyContent:"center"}}>
       
       <h1></h1>
     </div> */}

     
     <div ref={ref} className={`message ${isUser && 'message__user'}`}>
     <Card className={isUser?('message__usercard'):('message__guestcard')}  >
      <CardContent>
      
        <Typography color="white" variant="h5" component="h2">
        {!isUser  && `${message.username || 'Unkown User'}: ` } {message.message}
        </Typography>
      
      
      </CardContent>
      </Card>
     </div>
     
  </>
   

    
  
})

export default Message
