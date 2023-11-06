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
    console.log("데이터 불러오는중");
    axios
      .get(import.meta.env.VITE_LIST_API)
      .then((response) => {
        setCarList(response.data);
        setLoading(false);
        console.log("carList 받아오기 성공", carList);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        console.log("carList 받아오기 실패", carList);
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
