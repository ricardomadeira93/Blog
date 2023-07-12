import Article from "./components/Article";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="p-3 max-w-[700px] my-0 mx-auto">
      <Header />
      <Article />
    </div>
  );
}

export default App;
