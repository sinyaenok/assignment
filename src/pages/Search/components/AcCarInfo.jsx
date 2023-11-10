//외부 라이브러리
import styled from "styled-components";
// import { useState } from "react";
// import axios from "axios";

//내부
import CarNumber from "./AcCarInfo/CarNumber";
import CarName from "./AcCarInfo/CarName";
import CarDivision from "./AcCarInfo/CarDivision";
import CarRepair from "./AcCarInfo/CarRepair";

/** 사고차량정보 컴포넌트 */
const AcCarInfo = ({
  onHandleChangeSearchCarNumber,
  onHandleClickGetApi,
  onHandleEnterPressGetApi,
  onSearchCarNumber,
  onSearchedCarName,
}) => {
  return (
    <AcCarSection>
      <div className="AcCarTitle">
        <h2>사고차량 정보</h2>
      </div>
      <CarNumber
        onHandleChangeSearchCarNumber={onHandleChangeSearchCarNumber}
        onHandleClickGetApi={onHandleClickGetApi}
        onHandleEnterPressGetApi={onHandleEnterPressGetApi}
        onSearchCarNumber={onSearchCarNumber}
      />
      s
      <CarName onSearchedCarName={onSearchedCarName} />
      <CarDivision />
      <CarRepair />
    </AcCarSection>
  );
};

export default AcCarInfo;

//styled
const AcCarSection = styled.section`
  padding-bottom: 50px;
`;
