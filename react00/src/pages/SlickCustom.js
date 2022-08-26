import { useEffect, useState } from "react";
import { useRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";

// slide dot커스텀, 슬라이드번호와갯수 나오게 함

const SlickCustom = () => {
  const SlideEle = [
    { id: 1, h2: 'Jewellery collection event', p: '모던하면서도 클래식한게 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
    { id: 2, h2: 'Jewellery collection event', p: '모던하면서도 클래식한게 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
    { id: 3, h2: 'Jewellery collection event', p: '모던하면서도 클래식한게 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
    { id: 4, h2: 'Jewellery collection event', p: '모던하면서도 클래식한게 디자인들을 완벽하게 표현한 그라프 하우스의 시그니처 컬렉션은 다양한 컷 스톤 그리고 색상들을 멋진 조합으로 선사합니다.' },
  ]

  const s1 = useRef();
  const [num, setNum] = useState(); // 초기값을 주지 않으면 처음시작됫을 때 부터 on이 붙지 않은 상태로 시작되지 않는다. num이 없는 상태니 idx와 비교도 못하니까

  useEffect(() => { //페이지 실행됬을 때 딱 한번만 setNum을 0으로 초기화 해준다. 실행되고 나서 num이 0이되니까 슬라이드 넘어간 후 on이 붙는다
    setNum(0)
  }, [])

  const set = {
    arrows: false,
    afterChange: (idx) => {
      setNum(idx)
    },
    autoplay: true,
  }






  return (
    <>
      <Slider ref={s1} {...set} className="MainVisual">
        {
          SlideEle.map((el, idx) =>
            <figure
              key={el.id}
              className={`itm0${idx + 1} ${idx === num ? 'on' : ''}`} //백틱을 써서 다른 itm이라는 클래스이름도 주게 해준다.
            >
              <div className="slogan">
                <h2>{el.h2}</h2>
                <p>{el.p}</p>
                <a href="#!">more</a>
              </div>
            </figure>

          )
        }
      </Slider>

      <div className="num">
        {num + 1} / {SlideEle.length}
      </div>

      <div className="slideArrow">
        <i className="xi-arrow-left" onClick={() => (s1.current.slickPrev())}></i>
        <i className="xi-arrow-right" onClick={() => (s1.current.slickNext())}></i>
      </div>

      <ul className="slideDots">
        {
          SlideEle.map((el, idx) => <li key={el.id}
            onClick={() =>
              (s1.current.slickGoTo(idx))
            }
            className={idx === num ? "on" : ""}
          >
            {el.id}</li>)
        }
      </ul>

    </>
  )
}

export default SlickCustom;