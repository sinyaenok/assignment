//외부 라이브러리
import styled from "styled-components";

/** 차량 번호를 조회하는 컴포넌트 */
const CarNumber = ({
  searchCarNumber,
  onHandleChangeSearchCarNumber,
  onHandleEnterPressGetApi,
  onHandleClickGetApi,
}) => {
  return (
    <CarNumberSection>
      <div className="carNumberTitle">
        <h3>차량 번호</h3>
      </div>
      <div className="carNumberBox">
        <div className="carNumberInputBox">
          <input
            className="carNumberInput"
            placeholder="예) 100호1234"
            defaultValue={searchCarNumber}
            onChange={onHandleChangeSearchCarNumber}
            onKeyDown={onHandleEnterPressGetApi}
          />
        </div>
        <div className="carNumberBtnBox">
          <button className="carNumberBtn" onClick={onHandleClickGetApi}>
            조회
          </button>
        </div>
      </div>
    </CarNumberSection>
  );
};

const CarNumberSection = styled.section`
  .carNumberBox {
    height: 50px;
    display: flex;
    padding: 6px;
  }
  .carNumberInputBox {
    border: 1px solid lightgray;
    width: 180px;
    padding: 6px;
  }
  .carNumberInput {
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
  }
  .carNumberBtnBox {
    background: lightgray;
    width: 50px;
    border-radius: 2px;
    margin-left: 6px;
  }
  .carNumberBtn {
    width: 100%;
    height: 100%;
  }
`;
export default CarNumber;
