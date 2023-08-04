import { useState } from "react";



const RangeSlider = () => {
  const [rangeval, setRangeval] = useState(1);

  return (
    <div class="range_slider">
      <div class="sliderValue">
        <span>1</span>
      </div>
      <div class="field">
        <div class="value left">1</div>
        <input type="range" min="1" max="12" steps="1" value="1" onChange={(event) => setRangeval(event.target.value)} onInput={(event) => setWeeks(event.target.value)}/>
        <div class="value right">12</div>
      </div>
    </div>
  );
};

export default RangeSlider;
