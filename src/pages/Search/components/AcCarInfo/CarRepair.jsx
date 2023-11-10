//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";

/** 차량 수리 공업사를 결정헀는지 안했는지 선택하는 컴포넌트 */
const CarRepair = () => {
  const [isDecide, setIsDecide] = useState(false); //결정했는지 안했는지의 값

  /** 클릭시 결정 버튼 활성화 되는 함수 */
  const handleIsDecide = () => {
    setIsDecide(true);
  };

  /** 클릭시 미정 버튼 활성화 되는 함수 */
  const handleIsUndecided = () => {
    setIsDecide(false);
  };
  return (
    <CarRepairSection $isDecide={isDecide}>
      <div className="carRepairTitle">
        <h3>차량 수리 공업사</h3>
      </div>
      <div className="carRepairBtnBox">
        <div className="decideBtnBox">
          <button className="decideBtn" onClick={handleIsDecide}>
            결정함
          </button>
        </div>
        <div className="undecidedBtnBox">
          <button className="undecidedBtn" onClick={handleIsUndecided}>
            미정
          </button>
        </div>
      </div>
    </CarRepairSection>
  );
};

export default CarRepair;

const CarRepairSection = styled.section`
  button {
    background: lightgray;
    border-radius: 2px;
  }
  .carRepairBtnBox {
    display: flex;
    height: 50px;
  }
  .decideBtnBox {
    width: 100%;
    padding: 6px;
  }
  .decideBtn {
    background-color: ${(props) => (props.$isDecide ? "orange" : "lightgray")};
    width: 100%;
    height: 100%;
  }
  .undecidedBtnBox {
    width: 100%;
    padding: 6px;
  }
  .undecidedBtn {
    background-color: ${(props) => (props.$isDecide ? "lightgray" : "orange")};
    width: 100%;
    height: 100%;
  }
`;
