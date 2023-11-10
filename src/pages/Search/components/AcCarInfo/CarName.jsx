//외부 라이브러리
import styled from "styled-components";

/** 차량 번호 데이터를 불러와 출력하거나 입력하는 컴포넌트 */
const CarName = ({ onSearchedCarName }) => {
  return (
    <CarNameSection>
      <div className="carNametitle">
        <h3>차량명</h3>
      </div>
      <div className="carNameInputBox">
        <input
          className="carNameInput"
          placeholder="예) 쏘나타"
          defaultValue={onSearchedCarName}
        />
      </div>
    </CarNameSection>
  );
};

export default CarName;

//styled
const CarNameSection = styled.section`
  .carNameInputBox {
    width: 300px;
    height: 40px;
    margin: 6px;
    padding: 6px;
    border: 1px solid lightgray;
  }
  .carNameInput {
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
  }
`;
