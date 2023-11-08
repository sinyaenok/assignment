//외부
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//내부
import ListSearch from "./components/ListSearch";
import ListTable from "./components/ListTable";

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiData, setApiData] = useState([]); //서버 데이터
  const [filteredApiData, setFilteredApiData] = useState([]); //필터링할 서버 데이터
  const [loading, setLoading] = useState(false); // 로딩
  const [success, setSuccess] = useState(false);

  const API = import.meta.env.VITE_LIST_API; //서버 주소

  //첫 렌더링시 데이터 받아오기
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setLoading(true);
        setApiData(response.data);
        setFilteredApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  }, []);
  //검색어 이벤트 핸들링
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  //엔터키 눌렀을 때
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputFilter();
    }
  };

  //검색 버튼 클릭 시
  const onClick = (e) => {
    e.preventDefault();
    inputFilter();
  };

  //검색어 필터링 함수

  const inputFilter = () => {
    //1. 사용자가 검색어를 입력할 경우
    if (inputValue !== "") {
      const filteredData = apiData.filter((data) => {
        return Object.values(data.acCar) // 배열로 바꿈
          .join("")
          .toLowerCase()
          .includes(inputValue.toLowerCase()); //해당 배열을 뽑아냄. 없으면 없는 배열이 되는거임.
      });
      //1-1. 검색어가 있는 경우
      if (filteredData.length > 0) {
        setSuccess(false);
        setFilteredApiData(filteredData);
        //1-2. 검색어가 없는 경우
      } else {
        setSuccess(true);
        setFilteredApiData(apiData);
      }
    }
    //2. 사용자가 검색어를 입력하지 않을 경우
    else {
      alert("검색어를 입력해주세요.");
      setSuccess(false);
      setFilteredApiData(apiData);
    }
  };

  //버튼 클릭시 이동
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/newassi/search");
  };

  return (
    <Container>
      <Header>
        <h1>내가 렌트 할 수 있는 차량은?</h1>
      </Header>
      <main>
        <ListSearch
          inputChange={inputChange}
          onKeyDown={onKeyDown}
          inputValue={inputValue}
          onClick={onClick}
        />
        <ListTable
          loading={loading}
          filteredApiData={filteredApiData}
          success={success}
        />
      </main>

      <Footer>
        <div className="linkBtnBox">
          <Button type="button" onClick={navigateToSearch}>
            비대면 렌터카 요청하기
          </Button>
        </div>
      </Footer>
    </Container>
  );
};

export default List;

//styled
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .linkBtnBox {
    width: 100%;
    padding: 12px;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  > h1 {
    font-size: 22px;
    font-weight: 400;
    padding: 16px 12px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: orange;
  border-radius: 3px;
  color: #fff;
  padding: 8px 10px;
  height: 100%;
  width: 100%;
`;
