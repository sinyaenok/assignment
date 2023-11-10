//외부 import
import { Routes, Route } from "react-router-dom";

//내부 import
import List from "./pages/List/List";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/newassi" element={<List />}></Route>
      <Route path="/newassi/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
