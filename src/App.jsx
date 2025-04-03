import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Router from "./components/router/Router";

import "./App.css";

function App() {
  return (
    <div className="font-sans m-0">
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
