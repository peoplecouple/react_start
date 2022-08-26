import { useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import '../basic.css';
import styles from './Topbanner.module.css'

const TopBanner = () => {
  //1.아이콘을 클릭한다.
  //2.아이콘을 클릭하면 Top Banner에 class "on"을 붙힌다./ 뗀다.
  //3.변수를 만들어서 true/ false되는 스위치를 만들고 
  //4. true/ false값에 따라 class "on"을 붙힌다./ 뗀다.
  const [toggle, setToggle] = useState(false);

  const css = {
    fontSize: '100px',
    color: 'pink'
  }

  return (
    <>
      {/* jsx 안에서는 if문이나 for문을 사용할 수 없음 */}
      <div className={`TopBanner ${toggle ? 'on' : ''}`}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur,<br />
          adipisicing elit. Sit, dolores.</p>
        <a href="" onClick={
          (e) => {
            e.preventDefault();
          }
        }>more</a>
      </div>
      <span onClick={() => {
        setToggle(!toggle)

      }} className={toggle ? 'btn on' : 'btn'}>
        <BsFillHandThumbsUpFill />
        {/* 아이콘을 컴포턴트 형식으로 가져온다. */}
        {/* 컴포넌트는 이벤트를 줄 수 없으니 span으로 싸고 div에 이벤트를 준다. */}
      </span>


      {/* css적용법 */}
      {/* 모듈방법은 클래스 이름을 랜덤으로 바꿔서 들고오므로 on을 붙힐 수 없다는 단점이 있다. 하지만 클래스이름이 같아서 생기는 충돌은 막을 수 있다. */}
      <div style={css}>style Test</div>
      <div className={styles.test}>module.css Test</div>

    </>

  )
}

export default TopBanner;


//리액트 아이콘 넣기
//https://react-icons.github.io/react-icons
//npm install react-icons --save 다운받고
//import 해오기