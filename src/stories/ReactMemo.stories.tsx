import React, {useState} from 'react';


export default {
    title: 'React.memo demo',
}

export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) =>
        <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example = () => {
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