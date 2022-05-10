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
        <div className={s.message}>
            <img src={props.avatar} alt='#'/>

            <div className={s.angle}/>

            <div className={s.text}>
                <h5 className={s.name}>{props.name}</h5>
                <p className={s.sms}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
