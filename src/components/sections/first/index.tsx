import { Component } from "solid-js";
import Text from "./TextLayout";
import Image from "./Image";
import { createScrollPosition } from "../../../primtives";

const First: Component = () => {
  const scrollY = createScrollPosition();
  return (
    <div class="first">
      <Text scrollY={scrollY()} />
      <Image />
      <Text isOutlined={true} scrollY={scrollY()} />
    </div>
  );
};

export default First;
