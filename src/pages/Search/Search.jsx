//외부
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
//내부

const Search = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [searchData, setSearchData] = useState({ result: false, data: "" });

  const carNumberInputChange = (event) => {
    setCarNumber(event.target.value);
  };

  const phoneNumberAuth = () => {
    alert("인증번호를 발송했습니다.");
  };
  const UnDisabled = phoneNumber.length === 11;

  const handleInputChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setPhoneNumber(input);
  };

  const onClickEvent = () => {
    axios.get(import.meta.env.VITE_SEARCH_API).then((res) => {
      setSearchData(res.data);
    });
  };

  return (
    <Container>
      <Header>
        <h1>비대면 요청하기</h1>
      </Header>
      <Main>
        <Section>
          <div>
            <h2>운전자 정보</h2>
          </div>

          <Phone>
            <h3>연락처</h3>
            <div className="phoneBox">
              <Form>
                <div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    maxLength="11"
                    placeholder="휴대폰 번호"
                  />
                </div>
              </Form>
              <div className="btnBox">
                <Button disabled={!UnDisabled} onClick={phoneNumberAuth}>
                  인증
                </Button>
              </div>
            </div>
          </Phone>

          <section>
            <h3>이용지역</h3>
            <Form>
              <div>
                <input placeholder="이용지역을 선택해주세요" />
              </div>
            </Form>
          </section>
        </Section>
        <Section>
          <h2>사고차량 정보</h2>

          <section>
            <h3>차량 번호</h3>
            <CarNumber>
              <Form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    value={carNumber}
                    onChange={carNumberInputChange}
                    placeholder="예) 100호/1234"
                  />
                </div>
              </Form>
              <div className="btnBox">
                <Button onClick={onClickEvent}>조회</Button>
              </div>
            </CarNumber>
          </section>

          <section>
            <h3>차량명</h3>
            <Form>
              <div>
                <input
                  placeholder="예) 쏘나타"
                  defaultValue={searchData.data.name}
                />
              </div>
            </Form>
            <CarOriginAndFactory>
              <h3>차량 구분</h3>
              <div className="btnBox">
                <Button100>국산차</Button100>
                <Button100>수입차</Button100>
              </div>
            </CarOriginAndFactory>
            <CarOriginAndFactory>
              <h3>차량 수리 공업사</h3>
              <div className="btnBox">
                <Button100>결정함</Button100>
                <Button100>미정</Button100>
              </div>
              <div className="desc">
                * 차량을 수리할 공업사가 정해졌는지 알려주세요.
              </div>
            </CarOriginAndFactory>
          </section>
        </Section>

        <Section>
          <h2>요청 정보</h2>
          <h3>가해자 보험사 접수번호</h3>
          <FormFlex>
            <div className="dbBox">
              <input className="db" value="DB" disabled />
            </div>
            <div>
              <input value="23" disabled />
            </div>
          </FormFlex>
          <Request>
            <h3>추가 요청 사항</h3>
            <div className="desc">
              <textarea
                placeholder="추가적인 요청 사항이 있으시면 입력해주세요.&#13;&#10; &#45;요청자의 선통화 부탁드립니다.&#13;&#10; &#45;희망차량은 벤츠E300 2.0 입니다. &#13;&#10; &#45;깨끗한 차량 부탁드립니다. 등"
              ></textarea>
              <div className="textLength">0/800자</div>
            </div>
          </Request>
        </Section>
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
  /* border: 1px solid red; */
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
