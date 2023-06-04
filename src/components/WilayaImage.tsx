import { type Component } from "solid-js";

type WilayaImageProps = {
  src: string;
  isActive: boolean;
};

const WilayaImage: Component<WilayaImageProps> = (props) => {
  return (
    <li>
      <img
        src={`src/assets/pictures/${props.src}`}
        alt={`${props.isActive}`}
        class={props.isActive ? "is-active" : ""}
        loading="lazy"
      />
    </li>
  );
};

export default WilayaImage;
