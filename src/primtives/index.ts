import { Accessor, createEffect, createSignal, onCleanup } from "solid-js";

export type MousePosition = {
  x: number;
  y: number;
};

export const createMousePosition = (): Accessor<MousePosition> => {
  const [mousePosition, setMousePosition] = createSignal<MousePosition>({
    x: 0,
    y: 0,
  });

  createEffect(() => {
    const updateMousePosition = (e: any) => {
      const { clientX: x, clientY: y } = e;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);

    onCleanup(() => {
      window.removeEventListener("mousemove", updateMousePosition);
    });
  });

  return mousePosition;
};
