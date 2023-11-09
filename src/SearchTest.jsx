import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchTest() {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiName, setApiName] = useState("");

  const API = `${import.meta.env.VITE_SEARCH_API}/${inputValue}`;
  //100호1234
  // 125호7208
  // 228더7224
  // 345루1723

  const inputCahnge = (e) => {
    setInputValue(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("엔터키임");
      axios.get(API).then((res) => setApiName(res.data.data.name));
    }
  };
  console.log(apiName);
  return (
    <div>
      {/* <form> */}
      <input
        type="text"
        defaultValue={inputValue}
        onChange={inputCahnge}
        onKeyDown={onKeyDown}
      />
      <button>조회</button>
      <input defaultValue={apiName} />
      {/* </form> */}
    </div>
  );
}
