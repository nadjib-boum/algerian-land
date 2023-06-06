import { type Component, For, createEffect, onCleanup } from "solid-js";
import Slide from "./Slide";
import sliderImages from "../../../data/slides";
import { clamp } from "../../../helpers";
import { setCursorType } from "../../../store";

type SliderState = {
  hasMousePress: boolean;
  startXPosition: number;
  transformAmount: number;
  requestAnimatiomId: number;
};

const Slider: Component = (props) => {
  let sliderRef: HTMLDivElement | undefined;
  let sliderState: SliderState = {
    hasMousePress: false,
    startXPosition: 0,
    transformAmount: 0,
    requestAnimatiomId: 0,
  };

  const mouseDown = (event: MouseEvent) => {
    sliderState.hasMousePress = true;
    sliderState.startXPosition = event.pageX - sliderState.transformAmount;
  };
  const mouseUp = () => {
    sliderState.hasMousePress = false;
  };
  const mouseLeave = () => {
    setCursorType("default");
    sliderState.hasMousePress = false;
  };
  const mouseMove = (event: MouseEvent) => {
    if (!sliderState.hasMousePress) return;
    const { pageX } = event;
    const distance = pageX - sliderState.startXPosition;
    const clampedDistance = clamp(
      sliderRef?.clientWidth! - sliderRef?.scrollWidth!,
      distance,
      0
    );
    sliderState.transformAmount = clampedDistance;
    sliderRef!.style.transform = `translate3d(${clampedDistance}px,0,0)`;
  };

  const mouseEnter = (e: MouseEvent) => {
    setCursorType("slider");
  };

  createEffect(() => {
    sliderRef?.addEventListener("mousedown", mouseDown);
    sliderRef?.addEventListener("mouseup", mouseUp);
    sliderRef?.addEventListener("mouseleave", mouseLeave);
    sliderRef?.addEventListener("mousemove", mouseMove);
    sliderRef?.addEventListener("mouseenter", mouseEnter);
    onCleanup(() => {
      sliderRef?.removeEventListener("mousedown", mouseDown);
      sliderRef?.removeEventListener("mouseup", mouseUp);
      sliderRef?.removeEventListener("mouseleave", mouseLeave);
      sliderRef?.removeEventListener("mousemove", mouseMove);
      sliderRef?.removeEventListener("mouseenter", mouseEnter);
    });
  });

  return (
    <div class="slider" ref={sliderRef}>
      <For each={sliderImages}>
        {(img) => <Slide imgURL={`src/assets/slides/${img.imageURL}`} />}
      </For>
    </div>
  );
};

export default Slider;
