import styled from "styled-components";
import { useState } from "react";

const Receipt = () => {
  const [recNumber, setRecNumber] = useState(23); //접수 번호
  const RecNumbermaxLength = 6; //접수번호 최대글자

  /** 접수번호 change 이벤트*/
  const onChangeRecNumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setRecNumber(input);
  };
  return (
    <RecSection>
      <h3>가해자 보험사 접수번호</h3>
      <FormFlex>
        <div className="dbBox">
          <input className="db" value="DB" disabled />
        </div>
        <div>
          <input
            maxLength={RecNumbermaxLength}
            onChange={onChangeRecNumber}
            value={recNumber}
          />
        </div>
      </FormFlex>
    </RecSection>
  );
};

export default Receipt;

//styled
const RecSection = styled.section``;

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
