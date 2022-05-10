import React from 'react'
import Message from './Message'
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg',
    name: 'asrebel',
    message: 'Good day! It is my first HomeWork! Yeah!',
    time: '08:08',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            <h3 className={s.title}>homeworks 1</h3>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
