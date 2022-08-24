const DATA = [
  { id: 1, name: '우영우', age: 31, sleep: true },
  { id: 2, name: '배성아', age: 11, sleep: false },
  { id: 3, name: '신재이', age: 21, sleep: true }
]

const ListTest = () => {
  return (
    <>
      <ul>
        {DATA.map(
          (el, idx) =>
            <li key={idx}>{el.name}는 {el.age}살 {el.sleep ? '자고있음' : '일어났음'}</li>
        )
        }
        
        {/* {el.sleep && '자고있음'} 이렇게하면 true일때만 '자고있음'이 나온다*/}
        {/* li는 key값이 있어야한다. idx값은 잘 안쓰므로 el.id쓰는게 좋다 */}
        {/* {DATA.map(function (el, idx) {
          return (
            <li key={el.id}> {idx}번 {el.name}은 {el.age}살 {el.sleep ? '자고있음' : '일어났음'}</li>
          )
        })} */}

      </ul>
    </>
  )
}

export default ListTest;