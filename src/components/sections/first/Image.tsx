import { type Component } from "solid-js";

type ImageProps = {
  scrollY?: number;
};

const Image: Component<ImageProps> = (props) => {
  return (
    <img
      src="src/assets/header.jpg"
      alt="algiers"
      style={{ "--scroll-y": `${props.scrollY}px` }}
    />
  );
};

export default Image;
