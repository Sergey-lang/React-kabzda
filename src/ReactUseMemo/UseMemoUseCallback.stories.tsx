import React, {useCallback, useMemo, useState} from 'react';
import {log} from 'util';

export default {
    title: 'React.useMemo',
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
    const [users, setUsers] = useState(['Egor', 'Mike', 'Nikol', 'David'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLocaleLowerCase().indexOf('a') > -1)
    }, [users])

    let addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => addUser()}>Add user</button>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('Like Use Callback memo')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['REACT', 'JS', 'HTML', 'NodeJS'])

    const memoizedAddBooks = useMemo(() => {
        return () => {
            console.log('Add book callback')
            console.log(books)

            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBooks2 = useCallback(() => {
            console.log('Add book callback')
            console.log(books)

            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
        , [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            {counter}
            <Books books={books} addBook={memoizedAddBooks2}/>
        </>)
}

type BookSecretProps = {
    books: Array<string>
    addBook: () => void
}

export const SecretBooks = (props: BookSecretProps) => {
    console.log('Secret Books')

    return (
        <div>
            <button onClick={() => props.addBook()}>Add book</button>
            {props.books
                .map((book, i) =>
                    <div key={i}>{book}</div>)
            }
        </div>
    )
}

const Books = React.memo(SecretBooks)