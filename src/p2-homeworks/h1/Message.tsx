import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}


const Message = (props: MessagePropsType) => {
    return (
        <div className = {s.message}>
            <img src={props.avatar} alt='#'/>
            <div>
                <h5>{props.name}</h5>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
