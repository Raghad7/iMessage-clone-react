import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import './Message.css';
import moment from 'moment'

const Message = forwardRef(({id, contents: {
    timestamp, displayName, message, photo, uid, email
}}, ref) => {

    const user = useSelector(selectUser);
    return <div ref={ref} className={`message ${user.email === email && "message__sender"}`}>
        <Avatar className='message__photo' src={photo}/>
        <p> {message}</p>
        <small>{moment(new Date(timestamp?.toDate())).fromNow()}</small>
    </div>
})

export default Message;