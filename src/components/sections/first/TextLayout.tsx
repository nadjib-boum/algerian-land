import { Component } from "solid-js";

type TextProps = {
  isOutlined?: boolean;
  scrollY: number;
};

const Text: Component<TextProps> = (props) => {
  return (
    <div
      class={`text ${props.isOutlined ? "outlined" : ""}`}
      style={{ "--scroll-y": `${props.scrollY}px` }}
    >
      <h1>
        algeria algeria algeria algeria algeria algeria algeria algeria algeria
      </h1>
      <h1>
        algeria algeria algeria algeria algeria algeria algeria algeria algeria
      </h1>
    </div>
  );
};

export default Text;
