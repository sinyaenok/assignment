//외부 라이브러리
import styled from "styled-components";

/**이용지역을 입력하는 컴포넌트 */
const Area = () => {
  const areaInputMaxLength = 10;

  return (
    <AreaSection>
      <h3>이용지역</h3>

      <div className="areaInputBox">
        <input
          className="areaInput"
          placeholder="이용지역을 입력해주세요"
          maxLength={areaInputMaxLength}
        />
      </div>
    </AreaSection>
  );
};

export default Area;

//styled
const AreaSection = styled.section`
  .areaInputBox {
    border: 1px solid lightgray;
    border-radius: 2px;
    margin: 6px;
    padding: 8px;
  }
  .areaInput {
    width: 100%;
    border: 0;
    outline: none;
  }
`;
