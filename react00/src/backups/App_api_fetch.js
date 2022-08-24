import TopBanner from "../pages/TopBanner";
import ListTest from "../pages/ListTest";
import './basic.css'
import { useEffect, useState } from "react";



const App = () => {
  const [data, setData] = useState([]); //데이터를 배열에 넣자


  useEffect(() => { //데이터 가져올때 한번만 실행해라
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) //json은 객체화 시켜준다. 
      .then(json => setData(json))//이미 배열이니까 push 함수 필요없다.
  }, [])


  return (
    <>
      <TopBanner />
      <ListTest />
      {
        data.map(el => <li key={el.id}>{el.title}</li>)
      }

    </>
  )
}

export default App;