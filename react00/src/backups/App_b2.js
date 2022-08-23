import { useState } from 'react';
import Test from './list.js';

const App = () => {
  const [num, setNum] = useState(1)
  const numHandler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={() => (numHandler)}>num plus</button> */}
      <Test list='우영우' name="동그라미" age={1} onClick={numHandler}/>
      {/* props로 숫자 전달시에는{} 자바스크립트는 */}
      <Test list='이영우' name="동그라미" age={1} onClick={numHandler}/>
      <Test list='오영우' name="동그라미" age={1} onClick={numHandler}/>
      <Test list='양영우' name="동그라미" age={1} onClick={numHandler}/>


    </>
  )
}

export default App;