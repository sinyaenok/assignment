//외부 라이브러리
import styled from "styled-components";

//내부
import Receipt from "./ReqInfo/Receipt";
import Request from "./ReqInfo/Request";

/** 요청정보 컴포넌트 */
const ReqInfo = () => {
  return (
    <ReqInfoSection>
      <h2>요청 정보</h2>
      <Receipt />
      <Request />
    </ReqInfoSection>
  );
};

export default ReqInfo;

//styled
const ReqInfoSection = styled.section`
  padding-bottom: 50px;
  h2 {
    font-size: 16px;
    padding: 10px;
  }
`;
