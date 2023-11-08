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
      });
  }, []);

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

  const onClick = (e) => {
    e.preventDefault();
    inputFilter();
  };

  const inputFilter = () => {
    if (inputValue !== "") {
      const filteredData = filteredApiData.filter((data) => {
        return Object.values(data.acCar)
          .join("")
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
      setFilteredApiData(filteredData);
    } else {
      alert("검색어 입력하셈");
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
          apiData={apiData}
          inputChange={inputChange}
          onKeyDown={onKeyDown}
          inputValue={inputValue}
          onClick={onClick}
        />
        <ListTable loading={loading} filteredApiData={filteredApiData} />
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
