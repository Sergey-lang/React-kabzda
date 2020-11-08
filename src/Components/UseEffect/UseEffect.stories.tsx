import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample');

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter</button>
        </>
    )
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetIntervalExample');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
            console.log('RESET EFFECT')
        }
        //Мы должны зачистить интервал,получая его ID
    }, [])

    return (
        <>
            Hello, counter: {counter}
        </>
    )
}

//Перед тем как вызвать новый эффект, старый зачищается сам за собой вызывая render.
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with: ' + counter);

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('RESET EFFECT: ' + counter)
        }

    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}
//отписка от слушателя.
// Если не отписаться то будут многократный вызов за пределами компонента.
// Он будет продолжать слушать событие.

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with: ' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }

    }, [])

    return (
        <>
            Typed text: {text}
        </>
    )
}
//Если нет зачистки, то при выходе из компонента, ранее чем через 3 секунды(интеревал срабатывает через 3),
//мы увидим 'TIMEOUT EXPIRED', так как остаточный эффект остался. Поэтому нужна очистка.
//Текст ошибки "Can't perform a React state update on an unmounted component"
export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <>
            Typed text: {text}
        </>
    )
}