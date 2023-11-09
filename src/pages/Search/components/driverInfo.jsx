import styled from "styled-components";
import { useState } from "react";

// import Dropdown from "./Dropdown";
const DriverInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); //휴대폰 번호
  const [authBox, setAuthBox] = useState(false);
  const [authNumber, setAuthNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setPhoneNumber(input);
  };

  const handleAuthNumberChnage = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setAuthNumber(input);
  };
  const AuthMaxLength = 6;
  const UnDisabled = phoneNumber.length === 11;
  const handleAuthCheck = () => {
    if (authNumber.length === AuthMaxLength) alert("인증되셨습니다.");
    else alert("인증번호가 맞지않습니다.");
  };
  /** 인증 번호 발송 함수 */
  const phoneNumberAuth = () => {
    setAuthBox(true);
    alert("인증번호를 발송했습니다.");
  };

  return (
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
                onChange={handlePhoneNumberChange}
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
      {authBox && (
        <div>
          <Form>
            <div>
              <input
                placeholder="인증번호"
                onChange={handleAuthNumberChnage}
                maxLength={AuthMaxLength}
              />
            </div>
          </Form>
          <Button type="hidden" onClick={handleAuthCheck}>
            확인
          </Button>
          <div>인증번호를 발송하였습니다.</div>
        </div>
      )}

      <section>
        <h3>이용지역</h3>
        <Form>
          <div>
            <input placeholder="이용지역을 선택해주세요" />
          </div>
        </Form>
      </section>
    </Section>
  );
};
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

export default DriverInfo;

//styled
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

const AuthBox = styled.div`
  /* visibility: {authBox}; */
`;
