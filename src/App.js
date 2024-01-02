import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main className="container ">
        <Dictionary />
      </main>
      <footer className="footer text-center">
        open source code by{" "}
        <a href="https://github.com/MpofuMoud/Dictionary-project">Moud Mpofu</a>
        , and hosted on{" "}
        <a href="https://delightful-lolly-2b3890.netlify.app/"> Netlify</a>
      </footer>
    </div>
  );
}

export default App;
