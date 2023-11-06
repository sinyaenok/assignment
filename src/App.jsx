//외부 import
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//내부 import
import List from "./pages/List/List";
import Search from "./pages/Search/Search";

function App() {
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_LIST_API)
      .then((response) => {
        setCarList(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<List carList={carList} loading={loading} />}
      ></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;
