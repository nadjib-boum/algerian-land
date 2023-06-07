import { Component, createEffect, createSignal, onMount } from "solid-js";

const Three: Component = () => {
  const [animate, setAnimate] = createSignal<boolean>(false);
  onMount(() => {
    window.onload = () => {
      setTimeout(() => {
        setAnimate(true);
      }, 200);
    };
  });

  return (
    <div class={`three ${animate() ? "animate" : ""}`}>
      <div>
        <img src="src/assets/three/1.jpg" alt="1" />
      </div>
      <div>
        <img src="src/assets/three/2.jpg" alt="2" />
      </div>
      <div>
        <img src="src/assets/three/3.jpg" alt="3" />
      </div>
    </div>
  );
};

export default Three;
