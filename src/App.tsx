import { type Component } from "solid-js";
import Cursor from "./components/cursor";
import Header from "./components/sections/header";
import First from "./components/sections/first";
import Wilayas from "./components/sections/Wilayas";
import Slider from "./components/sections/slider";

const App: Component = () => {
  return (
    <div class="app">
      <Cursor isPrimary={true} />
      <Cursor />
      <Header />
      <First />
      <Wilayas />
      <Slider />
    </div>
  );
};

export default App;
