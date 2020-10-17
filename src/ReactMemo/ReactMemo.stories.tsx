import React, {useState} from 'react';

export default {
    title: 'React.memo',
}

export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const UsersArr = (props: { users: Array<string> }) => {
    console.log('Rerender Users')
    return <div>{props.users.map((u, i) =>
        <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersArr)//call rerender useSecret if it has changing

export const Example = () => {
    console.log('rerender main container')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Egor', 'Sveta', 'Stas', 'Dima'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}