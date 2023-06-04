import { type Component, For } from "solid-js";
import WilayaName from "./components/WilayaName";
import WilayaImage from "./components/WilayaImage";
import wilayas, { type Wilaya } from "./data/wilayas";
import { activeIndex } from "./store";

const App: Component = () => {
  return (
    <div class="app">
      <ul class="wilayas-names-list">
        <For each={wilayas}>
          {(wilaya: Wilaya, index) => (
            <WilayaName name={wilaya.name} index={index()} />
          )}
        </For>
      </ul>
      <ul class="wilayas-images-list">
        <For each={wilayas}>
          {(wilaya: Wilaya, index) => {
            return (
              <WilayaImage
                src={wilaya.imageURL}
                isActive={index() === activeIndex()}
              />
            );
          }}
        </For>
      </ul>
    </div>
  );
};

export default App;
