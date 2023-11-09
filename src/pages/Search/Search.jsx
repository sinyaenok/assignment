//외부
import styled from "styled-components";

//내부
import DriverInfo from "./components/DriverInfo";
import AcCarInfo from "./components/AcCarInfo";
import ReqInfo from "./components/ReqInfo";

const Search = () => {
  return (
    <Container>
      <Header>
        <h1>비대면 요청하기</h1>
      </Header>
      <Main>
        <DriverInfo />
        <AcCarInfo />
        <ReqInfo />
      </Main>
      <Footer>
        <div>
          <button>작성완료</button>
        </div>
      </Footer>
    </Container>
  );
};

export default Search;

//styled
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  max-height: 800px;
  height: 100%;

  h3 {
    font-size: 12px;
    padding: 6px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

const Header = styled.header`
  background: #fff;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  left: 0;
  h1 {
    font-size: 18px;
  }
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  button {
    width: 100%;
    background: gray;
    padding: 10px;
  }
`;
const Section = styled.section`
  padding-bottom: 50px;
  h2 {
    font-size: 16px;
    padding: 10px;
  }
`;

const Form = styled.form`
  div {
    margin: 6px;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  input {
    outline: none;
    border: 0;
    width: 100%;
  }
`;

const Phone = styled.section`
  width: 100%;
  height: 100%;
  .phoneBox {
    display: flex;
  }
  .btnBox {
    padding: 5px;
  }
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  height: 100%;
  padding: 0px 16px;
`;

const Button100 = styled(Button)`
  width: 100%;
  padding: 10px;
  margin: 0px 10px;
`;
const CarNumber = styled.div`
  display: flex;
  .btnBox {
    padding: 5px;
  }
`;

const CarOriginAndFactory = styled.div`
  .btnBox {
    display: flex;
    justify-content: space-around;
    margin: 4px;
  }
  .desc {
    color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }
`;

const FormFlex = styled(Form)`
  display: flex;
  padding-bottom: 50px;
  div {
    width: 100%;
  }
  .db {
    background: none;
  }
  .dbBox {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Request = styled.section`
  .desc {
    padding: 10px;
  }
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    outline: none;
    width: 100%;
    height: 300px;
  }
`;
