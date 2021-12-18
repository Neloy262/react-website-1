import "./App.css";
import Destination from "./components/Destination";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App overflow-hidden ">
      <div className="h-80 w-screen fixed z-10">
        <Navbar />
      </div>

      <Video />

      <Destination />

      <Footer />
    </div>
  );
}

export default App;
