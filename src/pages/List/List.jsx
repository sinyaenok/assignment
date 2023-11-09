//외부 라이브러리
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

//내부
import ListSearch from "./components/ListSearch";
import ListTable from "./components/ListTable";

/** ListSearch 컴포넌트와 ListTable을 출력하는 컴포넌트 */
export default function List() {
  const [searchValue, setSearchValue] = useState(""); //검색어
  const [listData, setListData] = useState([]); //차량 리스트 데이터
  const [filteredApiData, setFilteredApiData] = useState([]); //필터링할 서버 데이터
  const [loading, setLoading] = useState(true); // 로딩
  const [searchSuccess, setSearchSuccess] = useState(true); // 차량 검색 조회 성공
  const navigate = useNavigate(); //useNavigate 함수 상수화

  /** 서버에서 차량리스트를 받는 함수 */
  const getListData = () => {
    const LIST_API = import.meta.env.VITE_LIST_API;
    axios
      .get(LIST_API)
      .then((response) => {
        setListData(response.data);
        setFilteredApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  };
  //첫 렌더링시 서버 데이터 받아오기
  useEffect(() => {
    getListData();
  }, []);

  /**검색어 핸들링 함수 */
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  /**엔터키 눌렀을 때 작동하는 함수, 필터함수 작동 */
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); //새로고침 차단
      searchValueFilter();
    }
  };

  /** 클릭하면 데이터를 서칭하는 함수, 필터함수 작동 */
  const handleClickSearchFilter = (e) => {
    e.preventDefault(); //새로고침 차단
    searchValueFilter();
  };

  /**Search.jsx로 이동하는 navigate함수 */
  const navigateToSearch = () => {
    navigate("/newassi/search");
  };

  /**검색어 필터 함수 */
  const searchValueFilter = () => {
    //1. 사용자가 검색어를 입력할 경우
    if (searchValue !== "") {
      const filteredData = listData.filter((data) => {
        return Object.values(data.acCar) // api list에서 사고 차량 꺼내옴
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase()); //검색 사고차량이 api list에 있으면, 해당 사고차량 데이터(배열)를 뽑아냄.
      });
      //1-1. 검색한 사고차량 데이터가 있는 경우
      if (filteredData.length > 0) {
        setSearchSuccess(true); //검색 성공
        setFilteredApiData(filteredData); //검색한 사고차량 데이터 넣어줌
        //1-2. 검색어한 사고차량 데이터가 없는 경우
      } else {
        setSearchSuccess(false); //검색 실패
        setFilteredApiData(listData); // 기존 차량 데이터 넣어줌
      }
    }
    //2. 사용자가 검색어를 입력하지 않을 경우
    else {
      alert("검색어를 입력해주세요.");
      setSearchSuccess(true); //검색 성공
      setFilteredApiData(listData); // 기존 차량 데이터 넣어줌
    }
  };

  return (
    <ListContainer>
      <Header>
        <h1 className="ListTitle">내가 렌트 할 수 있는 차량은?</h1>
      </Header>
      <Main>
        <ListSearch
          onSearchValue={searchValue} //props
          onHandleSearchValue={handleSearchValue} //props
          onHandleEnterPress={handleEnterPress} //props
          onHandleClickSearchFilter={handleClickSearchFilter} //props
        />
        <ListTable
          onFilteredApiData={filteredApiData} //props
          onLoading={loading} //props
          onSearchSuccess={searchSuccess} //props
        />
      </Main>
      <Footer>
        <div className="navToSearchBtnBox">
          <StyledButton type="button" onClick={navigateToSearch}>
            비대면 렌터카 요청하기
          </StyledButton>
        </div>
      </Footer>
    </ListContainer>
  );
}

//styled

const ListContainer = styled.div`
  max-width: 800px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  .ListTitle {
    font-size: 22px;
    font-weight: 400;
    padding: 16px 12px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .navToSearchBtnBox {
    width: 100%;
    padding: 12px;
  }
`;
const StyledButton = styled.button`
  background: orange;
  height: 100%;
  width: 100%;
  color: white;
  border-radius: 2px;
  padding: 8px 10px;
`;
