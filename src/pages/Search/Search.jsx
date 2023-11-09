//외부
import styled from "styled-components";

//내부
import DriverInfo from "./components/DriverInfo";
import AcCarInfo from "./components/AcCarInfo";
import ReqInfo from "./components/ReqInfo";

/**DriverInfo와 AcCarInfo와 ReqInfo컴포넌트를 출력하는 컴포넌트 */
const Search = () => {
  return (
    <SearchContainer>
      <Header>
        <h1 className="searchTitle">비대면 요청하기</h1>
      </Header>
      <Main>
        <DriverInfo />
        <AcCarInfo />
        <ReqInfo />
      </Main>
      <Footer>
        <button className="reqBtn">작성완료</button>
      </Footer>
    </SearchContainer>
  );
};

export default Search;

//styled
const SearchContainer = styled.div`
  max-width: 800px;
  /* h3 {
    font-size: 12px;
    padding: 6px;
    color: rgba(0, 0, 0, 0.65);
  } */
`;

const Header = styled.header`
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  height: 55px;
  bottom: 0;
  padding: 2px 4px;
  .reqBtn {
    background: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;
