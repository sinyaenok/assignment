//외부
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

//내부
import DriverInfo from "./components/DriverInfo";
import AcCarInfo from "./components/AcCarInfo";
import ReqInfo from "./components/ReqInfo";
import Complete from "./components/Complete";

/**DriverInfo와 AcCarInfo와 ReqInfo컴포넌트를 출력하는 컴포넌트 */
const Search = () => {
  const [searchCarNumber, setSearchCarNumber] = useState(""); //차량 번호
  const [searchedCarData, setSearchCarData] = useState([]); //차량 데이터
  const [searchedCarName, setSearchCarName] = useState(""); //차량 이름

  /** 서버 주소 상수화 */
  const SEARCH_API = `${import.meta.env.VITE_SEARCH_API}/${searchCarNumber}`;

  /**차량 형식에 맞는지 boolean값을 배출하는 함수 */
  function carListBoolean(value) {
    //예) 100호1234
    const sliceString = Number(value.slice(3, 4)); //호 isNaN
    const remainString = Number(value.slice(0, 3) + value.slice(4)); //100 + 1234 !isNaN

    //조건 : 8글자 && 3번째 글자 String && 나머지는 Number
    if (value.length === 8 && isNaN(sliceString) && !isNaN(remainString)) {
      return true;
    }
    return false;
  }

  /**차량 데이터 조회 및 필터링 함수 */
  function carListFilter() {
    // 1. 검색어를 입력할 시
    if (searchCarNumber !== "") {
      // 1-1. 차량 형식에 맞췄을 시
      if (carListBoolean(searchCarNumber)) {
        axios.get(SEARCH_API).then((res) => {
          //서버 데이터를 받아와서
          const apiData = res.data;
          // 1-1-1. 검색어가 차량 데이터에 없을 시
          if (!apiData.result) {
            setSearchCarName("");
            alert("차량번호가 없으므로 직접 차량명을 입력해주세요.");
            // 1-1-2. 검색어가 차량 데이터에 있을 시,
          } else {
            setSearchCarData(apiData);
            setSearchCarName(apiData.data.name); //차량 데이터를 넣어줌.
          }
        });
        // 1-2. 차량 형식에 맞지 않았을 시
      } else {
        setSearchCarName("");
        setSearchCarData([]);
        alert("차량형식을 확인해주세요");
      }
    }
    // 2. 검색어를 입력하지 않았을 시
    else {
      setSearchCarName("");
      setSearchCarData([]);
      alert("차량번호를 입력해주세요!");
    }
  }
  /**엔터 누르면 서버 데이터를 받아옴 */
  const handleEnterPressGetApi = (e) => {
    if (e.key === "Enter") {
      carListFilter();
    }
  };
  /**버튼 클릭 시 서버 데이터 받아옴 */
  const handleClickGetApi = () => {
    carListFilter();
  };
  /** 차량 검색 이벤트 핸들링 */
  const handleChangeSearchCarNumber = (event) => {
    setSearchCarNumber(event.target.value);
  };

  return (
    <SearchContainer>
      <Header>
        <h1 className="searchTitle">비대면 요청하기</h1>
      </Header>
      <Main>
        <DriverInfo />
        <AcCarInfo
          onHandleChangeSearchCarNumber={handleChangeSearchCarNumber}
          onHandleClickGetApi={handleClickGetApi}
          onHandleEnterPressGetApi={handleEnterPressGetApi}
          onSearchCarNumber={searchCarNumber}
          onSearchedCarName={searchedCarName}
        />
        <ReqInfo />
      </Main>
      <Footer>
        <Complete />
      </Footer>
    </SearchContainer>
  );
};

export default Search;

//styled
const SearchContainer = styled.div`
  max-width: 800px;
  h2 {
    font-size: 16px;
    padding: 10px;
  }

  h3 {
    font-size: 12px;
    padding: 6px;
    color: gray;
  }
`;

const Header = styled.header`
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid lightgray;
  .searchTitle {
    font-size: 18px;
  }
`;
const Main = styled.main`
  width: 100%;
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  max-width: 800px;
  height: 55px;
  bottom: 0;
  padding: 2px 4px;
`;
