import React, {useState} from 'react';

export default {
  title: 'UseState demo',

}

function generateData() {
  console.log('generate data')
  return 5
}

export const Example1 = () => {
  console.log('Example')

  //const initValue = useMemo(generateData, [])

  const [counter, setCounter] = useState(generateData) //will call function and saved return value in counter 1 time

  return (
    <>
      <button onClick={() => setCounter((state) => state + 1)}>+
      </button>
      {counter}
    </>
  )
}

