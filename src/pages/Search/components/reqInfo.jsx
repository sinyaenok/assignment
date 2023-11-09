//외부
import styled from "styled-components";
import { useState } from "react";

const ReqInfo = () => {
  const [reqText, setReqText] = useState("");
  const [recNumber, setRecNumber] = useState(23);
  const maxLengthReqText = 800;
  const maxLengthRecNumber = 6;

  /**요청사항 change 이벤트 */
  const onChangeReqText = (e) => {
    setReqText(e.target.value);
  };
  const onChangeRecNumber = (e) => {
    const input = e.target.value.replace(/\D/g, ""); //정규식으로 숫자외에는 제거
    setRecNumber(input);
  };
  return (
    <Section>
      <h2>요청 정보</h2>
      <h3>가해자 보험사 접수번호</h3>
      <FormFlex>
        <div className="dbBox">
          <input className="db" value="DB" disabled />
        </div>
        <div>
          <input
            maxLength={maxLengthRecNumber}
            onChange={onChangeRecNumber}
            value={recNumber}
          />
        </div>
      </FormFlex>
      <Request>
        <h3>추가 요청 사항</h3>
        <div className="desc">
          <textarea
            onChange={onChangeReqText}
            maxLength={maxLengthReqText}
            placeholder="추가적인 요청 사항이 있으시면 입력해주세요.&#13;&#10; &#45;요청자의 선통화 부탁드립니다.&#13;&#10; &#45;희망차량은 벤츠E300 2.0 입니다. &#13;&#10; &#45;깨끗한 차량 부탁드립니다. 등"
          ></textarea>
          <div className="textLength">
            {reqText.length}/{maxLengthReqText}자
          </div>
        </div>
      </Request>
    </Section>
  );
};

export default ReqInfo;

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
