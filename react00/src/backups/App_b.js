import { useRef, useState } from "react";
import './basic.css';
const App = () => {
  const [num, setNum] = useState(1);
  const [toggle, setToggle] = useState(true);
  //const[변수, 함수] = useState(초기값)
  // const link = useRef(1);

  const Test = () => {
    return (
      <div>
        hello
      </div>
    )
  }
  return (
    <>
      <h2>토글클래스 연습</h2>
      {num}
      <section className={toggle ? '' : 'on'}>
        {toggle ? 'loading...' : <Test />}
      </section>
      <div>0000</div>

      {/* boolean값이라서 {toggle}이 화면에 보이지 않는다. */}
      <button onClick={
        () => (
          setNum(num + 1),
          console.log(num),

          setToggle(!toggle),
          console.log(toggle)

          // link.current = link.current + 1
          // console.log(link.current)
        )
      }>click</button>
      <br></br>
    </>

  )
}


// () => {} return을 써줘야함
// () => () return이 필요없을 때

//처음에는 index.js의 React.StrictMode(변화감지 시 재 로딩)때문에
//변화가 없더라도 2번 console에 찍힌다.

//이 후 state값이 변경되지 않는다면 1번만 console에  찍힌다. 
//ref만 변경될 경우 1번만 찍히고 
//state값이 변경될 경우 변화를 감지하여 2번 찍힌다.



//리액트에서는 변수를 state에 담아둔다.
//리액트는 state의 변화가 감지되면 함수를 다시 실행해서 변화된 값만 html에 뿌려준다.
//변화를 감지하는 변수를 만드려면 state함수를 사용해야 한다.



//이렇게도 가능함
//변수는 {}중괄호 속, 
// const App = () => {
//   const Home = () => {
//     return <div>007</div>
//   }
//   const a = 'A'
//   return <p>
//     {a} a
//     <Home/>
//   </p>
// }



//함수표현식 //함수를 변수에 담는다.
// const App = () => {
//   return <p>
//     <Home/>
//   </p>
// }

// const Home = () => {
//   return <div>007</div>
// }
//함수표현식은 호이스팅이 되지 않지만 Home의 순서가 늦어도 됨


// const App = function() {
//   return <i>002</i>
// }

// function App() {
//   return(
//     <div>001</div>
//   );
// }

export default App;

// 함수 두개 내보낼땐
// export{func01, func02} 이렇게 묶어서 내보냄