//외부 import
import { Routes, Route } from "react-router-dom";

//내부 import
import List from "./pages/List";
import Search from "./pages/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}
