//외부
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; //랜덤 id 생성

const List = ({ carList, loading }) => {
  //차량 리스트 받아옴
  const [searchResult, setSearchResult] = useState("");
  const [filteredResults, setFilteredResults] = useState(carList); //엔터 누르면 검색어가 여기 담김

  //입력창 이벤트
  const onChangeSearchResult = (event) => {
    setSearchResult(event.target.value);
  };
  const handleSearchEnter = (event) => {
    //1. 엔터를 눌렀는데
    if (event.key === "Enter") {
      event.preventDefault();
      //1-1. 빈문자열이 아닌 경우
      if (searchResult !== "") {
        //차량 리스트 배열을 필터링함
        const filterdData = carList.filter((data) => {
          return Object.values(data.acCar)
            .join("")
            .toLowerCase()
            .includes(searchResult.toLowerCase());
        });
        setFilteredResults(filterdData); //필터된 결과값을 담음
      } else {
        //1-2. 빈 문자열이면
        setFilteredResults(carList); //모든 차량 리스트를 필터 결과값에 담음. (필터차량 초기화)
        alert("검색어를 입력하세요");
      }
    }
  };

  const onClick = () => {
    if (searchResult === "") {
      alert("검색어를 입력하세요");
    }
  };
  //버튼 클릭시 이동
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/assignment/search");
  };

  return (
    <Container>
      <Header>
        <h1>내가 렌트 할 수 있는 차량은?</h1>
      </Header>
      <Main>
        <InputSection>
          <Form onSubmit={(e) => e.preventDefault()}>
            <div className="inputbox">
              <input
                className="input"
                type="text"
                placeholder="사고가 발생한 차량명을 입력해주세요."
                value={searchResult}
                onChange={onChangeSearchResult}
                onKeyUp={handleSearchEnter}
              />
            </div>
          </Form>
          <div className="buttonbox">
            <SearchBtn type="button" onClick={onClick}>
              검색
            </SearchBtn>
          </div>
        </InputSection>
        <TableSection>
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
                  <td>로딩중입니다. </td>
                  <td>로딩중입니다. </td>
                  <td>로딩중입니다. </td>
                </tr>
              ) : (
                filteredResults?.map((data) => {
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
        </TableSection>
      </Main>
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
const Main = styled.main``;

const InputSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .buttonbox {
    height: 45px;
    width: 75px;
  }
`;
const Form = styled.form`
  width: 70%;
  .inputbox {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #000;
  }
  .input {
    border: 0;
    width: 100%;
    outline: none;
  }
`;

const TableSection = styled.section`
  max-width: 800px;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10px 0px 0px 0px;

  table {
    width: 100%;
    border-spacing: 0px;
  }
  th {
    font-size: 14px;
    font-weight: 400;
    padding: 4px 0px;
    background: rgba(0, 0, 0, 0.1);
  }
  td {
    font-size: 12px;
    padding: 10px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
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
const SearchBtn = styled(Button)`
  margin-left: 5px;
`;
