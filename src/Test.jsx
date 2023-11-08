import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Test() {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_LIST_API;

  async function fetchData() {
    setLoading(true);
    const response = await fetch(API);
    const jsonData = await response.json();
    console.log("jsonData", jsonData);
    setApiData(jsonData);
    setFilteredData(jsonData);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log("apiData", apiData);
  const inputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputFilter();
    }
  };

  const onCliuck = (e) => {
    e.preventDefault();
    inputFilter();
  };

  const inputFilter = () => {
    if (inputValue !== "") {
      const filtered = filteredData.filter((data) => {
        return Object.values(data.acCar)
          .join("")
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      alert("검색어 입력하셈");
      setFilteredData(apiData);
    }
  };

  return (
    <div>
      <div className="input">
        <form>
          <input
            type="text"
            defaultValue={inputValue}
            onKeyDown={onKeyDown}
            onChange={inputChange}
          />
          <button onClick={onCliuck}>버튼</button>
        </form>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>사고차량</th>
              <th>대여차량</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>로딩중</td>
                <td>로딩중</td>
                <td>로딩중</td>
              </tr>
            ) : (
              filteredData.map((data) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{data.date}</td>
                    <td>{data.acCar}</td>
                    <td>{data.rtCar}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
