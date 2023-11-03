//외부 import
import { Routes, Route } from "react-router-dom";

//내부 import
import List from "./pages/List/List";
import Search from "./pages/Search/Search";

export default function Appㅂ() {
  return (
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}
