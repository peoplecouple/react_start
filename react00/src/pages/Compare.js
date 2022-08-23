// useRef와 useState의 비교
// useRef는 값은 바뀌어도 화면에 굳이 전환되지 않아도 된다면 쓰면된다.
// useRef는 State값이 변경될 때 화면에 뿌려진다.

import { useRef, useState } from "react"

const Compare = () => {
  const [num_state, setState] = useState(1);
  const num_ref = useRef(1);
  //num_ref는 꼭 current로 키값을 입력해서 변수값을 불러오자

  const increaseState = () => {
    setState(num_state + 1)
  }

  const increaseRef = () => {
    num_ref.current = num_ref.current + 1
  }

  return (
    <>
    <hr />
    <h2>useState와 useRef비교</h2>
      {num_state} {num_ref.current}
      <br></br>
      <button onClick={increaseState}>change state</button>
      <button onClick={increaseRef}>change ref</button>
    </>
  )
}

export default Compare;