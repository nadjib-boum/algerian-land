import { createSignal } from "solid-js";

const [activeIndex, setActiveIndex] = createSignal<number>(-1);
export { activeIndex, setActiveIndex };
