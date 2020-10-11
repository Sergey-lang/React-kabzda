import React, {useMemo, useState} from 'react';


export default {
    title: 'React.UseMemo demo',
}


export const DifficultCountingExampleUseMemo = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>

    </>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>{
        props.users.map((u, i) =>
        <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Help to react memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Egor', 'Sveta', 'Stas', 'Dima'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLocaleLowerCase().indexOf('a') > - 1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => addUser}>add user</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}