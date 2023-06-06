import { type Component } from "solid-js";
import { setActiveIndex, setCursorType } from "../../../store";

type WilayaNameProps = {
  name: string;
  index: number;
};

const WilayaName: Component<WilayaNameProps> = (props) => {
  const handleMouseEnter = (e: MouseEvent) => {
    setActiveIndex(props.index);
    setCursorType("wilaya");
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setActiveIndex(-1);
    setCursorType("default");
  };

  return (
    <li
      class="wilaya-title"
      onmouseenter={handleMouseEnter}
      onmouseleave={handleMouseLeave}
    >
      <span>{props.name}</span>
    </li>
  );
};

export default WilayaName;
