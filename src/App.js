import Home from "./components/Home";
import { StateProvider } from "./context";

const App = () => {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
};

export default App;
