import { Component } from "solid-js";

type SlideProps = {
  imgURL: string;
};

const Slide: Component<SlideProps> = (props) => {
  return (
    <div class="slide">
      <img src={props.imgURL} alt="slide" loading="lazy" />
    </div>
  );
};

export default Slide;
