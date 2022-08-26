import { useRef } from "react";
import MainSlider from "react-slick" //이름 임의로 바꿀수 있다.
import "slick-carousel/slick/slick.css";

const MainVisual = () => {
  const setting = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  //슬릭 메소드 사용하기
  // 1. 슬릭에 이름을 붙힌다. useRef --> 이름.current
  // 2. 클릭하는 요소에 이벤트를 직접 달아준다.

  const MS = useRef(null)

  return (
    <div>
      <h3>슬라이드</h3>
      <i className="xi-bars"></i>
      <MainSlider {...setting} ref={MS}>
        <figure>01</figure>
        <figure>02</figure>
        <figure>03</figure>
      </MainSlider>
      <div className="arrows">
        <i className="xi-arrow-left" onClick={() => (MS.current.slickPrev())}></i>
        <i className="xi-arrow-right" onClick={() => (MS.current.slickNext())}></i>
      </div>
    </div>
  )
}
export default MainVisual;

// 슬라이드 까는 법
// https://www.npmjs.com/package/react-slick 참고
// https://react-slick.neostack.com/docs/example/simple-slider 참고
// npm install react-slick --save
// npm install slick-carousel
// 
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";