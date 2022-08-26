import { useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const set = {
    vertical: true,
  }
  return (
    <>
      <h3>asNavFor slick</h3>

      <Slider dots={true} asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...set}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Slider>
      <hr />
      <Slider arrows={false} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Slider>
    </>

  )
}

export default SyncSlick