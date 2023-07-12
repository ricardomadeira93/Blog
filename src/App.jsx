import { Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import Header from "./components/Header";
import "./index.css";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      {/* Main Layout  */}
      <Route path="/" element={<Layout />}>
        {/* Routes */}
        <Route index element={<Article />} />
        <Route path={"/login"} element={<div className="">Login Page</div>} />
        {/* Routes End */}
      </Route>
    </Routes>
  );
}

export default App;
