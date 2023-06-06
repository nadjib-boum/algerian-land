import { createSignal } from "solid-js";

export type CursorType = "default" | "wilaya" | "slider";

const [activeIndex, setActiveIndex] = createSignal<number>(-1);
const [cursorType, setCursorType] = createSignal<CursorType>("default");

export { activeIndex, setActiveIndex, cursorType, setCursorType };
