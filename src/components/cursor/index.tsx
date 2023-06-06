import { Accessor, Component, createEffect } from "solid-js";
import { MousePosition, createMousePosition } from "../../primtives";
import { cursorType } from "../../store";

type CursorProps = {
  isPrimary?: boolean;
};

const Cursor: Component<CursorProps> = (props) => {
  const mousePosition: Accessor<MousePosition> = createMousePosition();
  createEffect(() => {
    console.log(cursorType());
  });
  return (
    <div
      class={`cursor ${props.isPrimary ? "primary" : "secondary"} ${
        cursorType() == "wilaya" ? "wilaya-cursor" : ""
      } ${cursorType() == "slider" ? "slider-cursor" : ""}`}
      style={{
        "--x": `${mousePosition().x}px`,
        "--y": `${mousePosition().y}px`,
      }}
    ></div>
  );
};

export default Cursor;
