import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "../h2/Affairs.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState <Array<UserType>>([]) // need to fix any

    const addUserCallback = (value: string) => { // need to fix any
        const newUser = {
            _id: v1(),
            name: value
        }

        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div>
            <hr/>
            <h3 className={s.title}>homeworks 3</h3>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
