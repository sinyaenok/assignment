//외부 라이브러리
import styled from "styled-components";

//내부
import PhoneNumber from "./DriverInfo/PhoneNumber";
import Area from "./DriverInfo/Area";

/** 운전자 정보 컴포넌트 */
const DriverInfo = () => {
  return (
    <DriverInfoSection>
      <h2 className="driverInfoTitle">운전자 정보</h2>
      <PhoneNumber />
      <Area />
    </DriverInfoSection>
  );
};
export default DriverInfo;

//styled
const DriverInfoSection = styled.section`
  padding-bottom: 50px;
`;
