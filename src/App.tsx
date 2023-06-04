import { createSignal, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button onclick={() => setCount(count() + 1)}>Count</button>
      <h3>{count()}</h3>
    </div>
  );
};

export default App;
