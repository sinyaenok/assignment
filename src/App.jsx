//외부 import
import { Routes, Route } from "react-router-dom";

//내부 import
import Inquiry from "./pages/Inquiry";
import Search from "./pages/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/inquiry" element={<Inquiry />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}
