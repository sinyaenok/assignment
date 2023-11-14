//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";

/** 연락처 인증 컴포넌트 */
const PhoneNumber = ({ onPhoneNumber, onHandleChangePhoneNumber }) => {
  // const [phoneNumber, setPhoneNumber] = useState(""); //휴대폰 번호
  const [isAuth, setIsAuth] = useState(false); //
  const [authNumber, setAuthNumber] = useState(""); //인증 번호
  /** 인증번호 입력 최대 길이 */
  const AuthMaxLength = 6;

  /** input이 11자리가 되어야 활성화 */
  // const UnDisabled = onPhoneNumber.length === 11;

  // /** 연락처 input change 함수 */
  // const handleChangePhoneNumber = (e) => {
  //   const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
  //   setPhoneNumber(input);
  // };

  /** 인증 input change 함수 */
  const handleChangeAuthNumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setAuthNumber(input);
  };

  /** 인증번호 체크 onClick 함수 */
  const handleCheckAuthNumber = () => {
    if (authNumber.length === AuthMaxLength) alert("인증되셨습니다.");
    else alert("인증번호를 다시 입력해주세요.");
  };

  /** 인증 번호 발송 함수 */
  const requsetAuthNumber = () => {
    setIsAuth(true);
    alert("인증번호를 발송했습니다.");
  };

  return (
    <PhoneNumberSection>
      <div className="phoneNumberTitle">
        <h3>연락처</h3>
      </div>
      <PhoneNumberBox>
        <div className="phoneNumberInputBox">
          <input
            className="phoneNumberInput"
            type="tel"
            value={onPhoneNumber}
            onChange={onHandleChangePhoneNumber}
            maxLength="11"
            placeholder="휴대폰 번호"
          />
        </div>
        <div className="phoneNumberBtnBox">
          <button
            className="phoneNumberBtn"
            // disabled={!UnDisabled}
            onClick={requsetAuthNumber}
          >
            인증
          </button>
        </div>
      </PhoneNumberBox>

      {isAuth && (
        <>
          <AuthNumberBox>
            <div className="phoneNumberInputBox">
              <input
                className="phoneNumberInput"
                onChange={handleChangeAuthNumber}
                maxLength={AuthMaxLength}
                placeholder="인증 번호"
              />
            </div>
            <div className="phoneNumberBtnBox">
              <button
                className="phoneNumberBtn"
                onClick={handleCheckAuthNumber}
              >
                확인
              </button>
            </div>
          </AuthNumberBox>
          <div className="authDesc">인증번호가 발송되었습니다!</div>
        </>
      )}
    </PhoneNumberSection>
  );
};

export default PhoneNumber;

//styled
const PhoneNumberSection = styled.section`
  .authDesc {
    padding: 4px 8px 16px;
    color: green;
    font-weight: 500;
  }
`;
const PhoneNumberBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 6px;

  .phoneNumberInputBox {
    width: 100%;
    border: 1px solid lightgray;
    padding: 10px;
  }
  .phoneNumberInput {
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
  }
  .phoneNumberBtnBox {
    width: 80px;
    padding-left: 6px;
  }
  .phoneNumberBtn {
    width: 100%;
    height: 100%;
    background: lightgray;
    border-radius: 2px;
  }
`;
const AuthNumberBox = styled(PhoneNumberBox)``;
