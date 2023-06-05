import {
  createSignal,
  type Component,
  createEffect,
  onCleanup,
} from "solid-js";
import { type MousePosition } from "../primtives";

type WilayaImageProps = {
  src: string;
  isActive: boolean;
  mousePosition: MousePosition;
};

type Dimensions = {
  height: number;
  width: number;
};

const WilayaImage: Component<WilayaImageProps> = (props) => {
  const [dimensions, setDimensions] = createSignal<Dimensions>({
    height: 0,
    width: 0,
  });
  let ref: HTMLImageElement | undefined;

  createEffect(() => {
    const onPageLoad = () => {
      if (ref) {
        const { height, width } = ref.getBoundingClientRect();
        console.log(height, width);
        setDimensions({ height, width });
      }
    };

    window.addEventListener("load", onPageLoad);

    onCleanup(() => {
      window.removeEventListener("load", onPageLoad);
    });
  });

  return (
    <li>
      <img
        src={`src/assets/pictures/${props.src}`}
        alt={`${props.isActive}`}
        class={props.isActive ? "is-active" : ""}
        ref={ref}
        style={{
          transform: `translate(${
            props.mousePosition.x - dimensions()?.width! / 2
          }px,${props.mousePosition.y - dimensions()?.height! / 2}px)`,
        }}
      />
    </li>
  );
};

export default WilayaImage;
