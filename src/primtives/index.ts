import {
  Accessor,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

export type MousePosition = {
  x: number;
  y: number;
};

export const createMousePosition = (): Accessor<MousePosition> => {
  const [mousePosition, setMousePosition] = createSignal<MousePosition>({
    x: 0,
    y: 0,
  });

  const updateMousePosition = (e: any) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });
  };

  onMount(() => {
    window.addEventListener("mousemove", updateMousePosition);
  });

  onCleanup(() => {
    window.removeEventListener("mousemove", updateMousePosition);
  });

  return mousePosition;
};

export const createScrollPosition = (): Accessor<number> => {
  const [scrollY, setScrollY] = createSignal<number>(window.scrollY);

  createEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return scrollY;
};
