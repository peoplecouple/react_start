import Some from './some.js'

const Test = ({list, age, name, onClick}) => {
  // const {list, age, name } = props 비구조할당한걸 Test변수에 넣어준거임.
  return (
    <div>
      <button onClick={onClick}>-_-</button>
      <h2>{list} {age} {name}
      <button onClick={
        ()=>(
          alert(list)
        )
      }>click</button>
      
      </h2>

      <Some list={list} age={age} name={name}/>

      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li> 
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  )
}

export default Test;