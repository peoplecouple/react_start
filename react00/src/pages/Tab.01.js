import { useState } from "react";

const TabContent01 = () => {
  return (
    <ul>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
    </ul>
  )
}

const TabData = [
  { id: 1, title: "menu01", content: <TabContent01 /> },
  { id: 2, title: "menu02", content: "content02" },
  { id: 3, title: "menu03", content: "content03" },
]



const Tab = () => {
  const [num, setNum] = useState(0)
  return (
    <>
      <ul>
        <li>
          {
            TabData.map((el, idx) => (
              <li key={el.id}
                onClick={() => setNum(idx)}
                className={num === idx ? 'on' : ''}>
                {el.title}
              </li>
            ))
          }
        </li>
      </ul>
      <div className="content">
        {
          TabData[num].content
        }
      </div>
    </>
  )
}

export default Tab;