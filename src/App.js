import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import TravellingTools from "./Components/TravellingTools";


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <TravellingTools />
      <Footer />
    </div>
  );
}

export default App;
