import { type Component } from "solid-js";
import { setActiveIndex } from "../../../store";

type WilayaNameProps = {
  name: string;
  index: number;
};

const WilayaName: Component<WilayaNameProps> = (props) => {
  return (
    <li
      class="wilaya-title"
      onmouseenter={() => setActiveIndex(props.index)}
      onmouseleave={() => setActiveIndex(-1)}
    >
      <span>{props.name}</span>
    </li>
  );
};

export default WilayaName;
