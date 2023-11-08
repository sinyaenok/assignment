//외부
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//내부
import ListSearch from "./components/ListSearch";

const List = () => {
  const 빈배열 = ["빈배열"];
  const API = import.meta.env.VITE_LIST_API; //서버 주소
  const [apiData, setApiData] = useState(빈배열); //서버 데이터
  const [loading, setLoading] = useState(false); // 로딩

  //첫 렌더링시 데이터 받아오기
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setLoading(true);
        console.log("loading 시작", loading);
        setApiData(response.data);
        setLoading(false);
        console.log("loading 끝", loading);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  console.log(apiData);
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

      <ListSearch apiData={apiData} loading={loading} />

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
