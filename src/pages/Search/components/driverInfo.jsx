//외부 라이브러리
import styled from "styled-components";

//내부
import PhoneNumber from "./DriverInfo/PhoneNumber";

/** 운전자 정보 컴포넌트 */
const DriverInfo = () => {
  return (
    <Section>
      <h2 className="driverInfoTitle">운전자 정보</h2>

      <PhoneNumber />

      <section>
        <h3>이용지역</h3>
        <Form>
          <div>
            <input placeholder="이용지역을 선택해주세요" />
          </div>
        </Form>
      </section>
    </Section>
  );
};
export default DriverInfo;

//styled
const Phone = styled.section`
  width: 100%;
  height: 100%;
  .phoneBox {
    display: flex;
  }
  .btnBox {
    padding: 5px;
  }
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  height: 100%;
  padding: 0px 16px;
`;

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
