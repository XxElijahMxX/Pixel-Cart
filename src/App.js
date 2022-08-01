import "./App.css";
import Header from "./Components/Header/header";
import Home from "./Components/Header/Home/home";
import Checkout from "./Components/Checkout/checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Checkout />
    </div>
  );
}

export default App;
