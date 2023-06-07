import { type Component } from "solid-js";
import Cursor from "./components/cursor";
import Header from "./components/sections/header";
import Three from "./components/sections/three";
import First from "./components/sections/first";
import Wilayas from "./components/sections/Wilayas";
import Slider from "./components/sections/slider";
import Footer from "./components/sections/footer";

const App: Component = () => {
  return (
    <div class="app">
      <Cursor isPrimary={true} />
      <Cursor />
      <Header />
      <Three />
      <First />
      <Wilayas />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
