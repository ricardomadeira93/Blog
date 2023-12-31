import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CreatePost from "./Pages/CreatePost";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        {/* Main Layout  */}
        <Route path="/" element={<Layout />}>
          {/* Routes */}
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          {/* Routes End */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
