import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import { CoffeeContext, CoffeeProvider } from "./context/CoffeeContext";

function App() {
  
    return (
      <>
        <h1>Welcome to Coffee App</h1>

          <SelectedCoffeeBean />

      </>
    );
}

export default App;