import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WordWink📖</h1>
        <h3>Your Digital Dictionary </h3>
      </header>
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
