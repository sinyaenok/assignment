//외부
import styled from "styled-components";
import { useState } from "react";

//내부
import ListTable from "./ListTable";

const ListSearch = ({ apiData, loading }) => {
  const [searchResult, setSearchResult] = useState(""); //입력값
  const [filteredResults, setFilteredResults] = useState([]); //엔터 누르면 검색어가 여기 담김

  console.log("리스트서치에서 불러오는 데이터", apiData);
  console.log(
    "리스트서치에서 불러오는 필터링 데이터, 기본 값 넣음",
    filteredResults
  );
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
        const filterdData = apiData.filter((data) => {
          return Object.values(data.acCar)
            .join("")
            .toLowerCase()
            .includes(searchResult.toLowerCase());
        });
        setFilteredResults(filterdData); //필터된 결과값을 담음
      } else {
        //1-2. 빈 문자열이면
        setFilteredResults(apiData); //모든 차량 리스트를 필터 결과값에 담음. (필터차량 초기화)
        alert("검색어를 입력하세요");
      }
    }
  };

  const onClick = () => {
    if (searchResult === "") {
      alert("검색어를 입력하세요");
    }
    if (searchResult !== "") {
      //차량 리스트 배열을 필터링함
      const filterdData = apiData.filter((data) => {
        return Object.values(data.acCar)
          .join("")
          .toLowerCase()
          .includes(searchResult.toLowerCase());
      });
      setFilteredResults(filterdData); //필터된 결과값을 담음
    } else {
      //1-2. 빈 문자열이면
      setFilteredResults(apiData); //모든 차량 리스트를 필터 결과값에 담음. (필터차량 초기화)
      alert("검색어를 입력하세요");
    }
  };

  return (
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
      <ListTable
        apiData={apiData}
        filteredResults={filteredResults}
        loading={loading}
      />
    </Main>
  );
};
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

const Main = styled.main``;
export default ListSearch;
