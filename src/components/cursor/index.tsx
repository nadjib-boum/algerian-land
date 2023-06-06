import { Accessor, Component } from "solid-js";
import { MousePosition, createMousePosition } from "../../primtives";

type CursorProps = {
  isPrimary?: boolean;
};

const Cursor: Component<CursorProps> = (props) => {
  const mousePosition: Accessor<MousePosition> = createMousePosition();
  return (
    <div
      class={`cursor ${props.isPrimary ? "primary" : "secondary"}`}
      style={{
        "--x": `${mousePosition().x}px`,
        "--y": `${mousePosition().y}px`,
      }}
    ></div>
  );
};

export default Cursor;
