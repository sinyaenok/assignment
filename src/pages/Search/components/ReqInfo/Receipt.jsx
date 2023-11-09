//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";

/** 접수번호 컴포넌트 */
const Receipt = () => {
  const [recNumber, setRecNumber] = useState(23); //접수 번호
  /** 접수번호 최대글자 */
  const RecNumbermaxLength = 6;

  /** 접수번호 change 이벤트*/
  const onChangeRecNumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setRecNumber(input);
  };
  return (
    <RecSection>
      <h3>가해자 보험사 접수번호</h3>
      <RecInputBoxs>
        <div className="dbInputBox">
          <input className="dbInput" value="DB" disabled />
        </div>
        <div className="recInputBox">
          <input
            className="recInput"
            maxLength={RecNumbermaxLength}
            onChange={onChangeRecNumber}
            value={recNumber}
          />
        </div>
      </RecInputBoxs>
    </RecSection>
  );
};

export default Receipt;

//styled
const RecSection = styled.section`
  width: 100%;
  margin-bottom: 10px;
`;
const RecInputBoxs = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  div {
    width: 100%;
    margin: 6px;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
  }
  input {
    width: 100%;
    outline: none;
    border: 0;
  }
  .dbInputBox {
    background: lightgray;
  }
  .dbInput {
    background: none;
  }
`;
