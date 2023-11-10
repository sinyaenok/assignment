//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";

/** 국산차와 수입차 중 선택하는 포넌트*/
const CarDivision = () => {
  const [isDomestic, setIsDomestic] = useState(true); //국산차인지 아닌지 확인하는 값

  /**클릭시 국산차 버튼이 활성화 되는 함수 */
  const handleIsDomestic = () => {
    setIsDomestic(true);
  };
  /**클릭시 수입차 버튼이 활성화 되는 함수 */
  const handleIsImported = () => {
    setIsDomestic(false);
  };
  return (
    <CarDivisionSection $isDomestic={isDomestic}>
      <div className="carDivisionTitle">
        <h3>차량 구분</h3>
      </div>
      <div className="carDivisionBtnBox">
        <div className="domesticCarBtnBox">
          <button className="domesticCarBtn" onClick={handleIsDomestic}>
            국산차
          </button>
        </div>
        <div className="importedCarBtnBox">
          <button className="importedCarBtn" onClick={handleIsImported}>
            수입차
          </button>
        </div>
      </div>
    </CarDivisionSection>
  );
};

export default CarDivision;

//styled
const CarDivisionSection = styled.section`
  button {
    background: lightgray;
    border-radius: 2px;
  }
  .carDivisionBtnBox {
    display: flex;
    height: 50px;
  }
  .domesticCarBtnBox {
    width: 100%;
    padding: 6px;
  }
  .domesticCarBtn {
    background-color: ${(props) =>
      props.$isDomestic ? "orange" : "lightgray"};
    width: 100%;
    height: 100%;
  }
  .importedCarBtnBox {
    width: 100%;
    padding: 6px;
  }
  .importedCarBtn {
    background-color: ${(props) =>
      props.$isDomestic ? "lightgray" : "orange"};
    width: 100%;
    height: 100%;
  }
`;
