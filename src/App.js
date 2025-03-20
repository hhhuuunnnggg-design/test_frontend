import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.js";
import PostUser from "./pages/employee/postUser.js";
import Header from "./pages/header/header.js";
import NoMatch123 from "./pages/noMatch/noMatch.js"; // Viết hoa đúng với tên file

function App() {
  return (
    <>
      <Header />;
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<PostUser />} />
        <Route path="*" element={<NoMatch123 />} />
      </Routes>
    </>
  );
}

export default App;
