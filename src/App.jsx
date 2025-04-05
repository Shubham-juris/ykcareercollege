import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Router from "./router/Router";

import "./App.css";

function App() {
  return (
    <div style={{ boxSizing: "border-box" }} className="font-sans m-0">
      <Navbar />
      <main className="mx-auto max-w-[1240px]">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
