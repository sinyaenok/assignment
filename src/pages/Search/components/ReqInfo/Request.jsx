//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";

const Request = () => {
  const [reqText, setReqText] = useState(""); //요청사항 text값

  const ReqTextmaxLength = 800; //요청사항 최대글자

  /** 요청사항 change 이벤트 */
  const onChangeReqText = (e) => {
    setReqText(e.target.value);
  };
  return (
    <RequestSection>
      <h3>추가 요청 사항</h3>
      <div className="desc">
        <textarea
          onChange={onChangeReqText}
          maxLength={ReqTextmaxLength}
          placeholder="추가적인 요청 사항이 있으시면 입력해주세요.&#13;&#10; &#45;요청자의 선통화 부탁드립니다.&#13;&#10; &#45;희망차량은 벤츠E300 2.0 입니다. &#13;&#10; &#45;깨끗한 차량 부탁드립니다. 등"
        ></textarea>
        <div className="textLength">
          {reqText.length}/{ReqTextmaxLength}자
        </div>
      </div>
    </RequestSection>
  );
};

export default Request;

//styled
const RequestSection = styled.section`
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
