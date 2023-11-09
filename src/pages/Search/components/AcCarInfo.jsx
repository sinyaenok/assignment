//외부 라이브러리
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

/** 사고차량정보 컴포넌트 */
const AcCarInfo = () => {
  const [carNumber, setCarNumber] = useState(""); //차량 번호
  const [searchedCarData, setSearchCarData] = useState([]); //차량 데이터

  const [isDomesticCar, setIsDomesticCar] = useState(true);
  const [isDecision, setIsDecision] = useState(false);

  const handleIsDomesticCar = () => {
    setIsDomesticCar(true);
  };
  const handleIsNotDomesticCar = () => {
    setIsDomesticCar(false);
  };
  const handleIsDecision = () => {
    setIsDecision(true);
  };
  const handleIsNotDecision = () => {
    setIsDecision(false);
  };

  const API = `${import.meta.env.VITE_SEARCH_API}/${carNumber}`;

  /**차량 형식에 맞는지 boolean값을 배출하는 함수 */
  function carListBoolean(value) {
    //100호1234
    const sliceStr = Number(value.slice(3, 4)); //호 isNaN
    const remainStr = Number(value.slice(0, 3) + value.slice(4)); //100 + 1234 !isNaN

    //조건 : 8글자 && 3번째 글자 String && 나머지는 Number
    if (value.length === 8 && isNaN(sliceStr) && !isNaN(remainStr)) {
      return true;
    }
    return false;
  }

  /**차량 데이터 조회 및 필터링 함수 */
  function carListFilter() {
    // 1. 검색어를 입력할 시
    if (carNumber !== "") {
      // 1-1. 차량 형식에 맞췄을 시
      if (carListBoolean(carNumber)) {
        axios.get(API).then((res) => {
          //서버 데이터를 받아와서
          const apiData = res.data;
          // 1-1-1. 검색어가 차량 데이터에 없을 시
          if (!apiData.result) {
            setSearchCarData([]);
            alert("차량번호가 없으므로 직접 차량명을 입력해주세요.");
            // 1-1-2. 검색어가 차량 데이터에 있을 시,
          } else {
            setSearchCarData(apiData.data.name); //차량 데이터를 넣어줌.
          }
        });
        // 1-2. 차량 형식에 맞지 않았을 시
      } else {
        setSearchCarData([]);
        alert("차량형식을 확인해주세요");
      }
    }
    // 2. 검색어를 입력하지 않았을 시
    else {
      setSearchCarData([]);
      alert("차량번호를 입력해주세요!");
    }
  }
  /**엔터 누르면 서버 데이터를 받아옴 */
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      carListFilter();
    }
  };
  /**버튼 클릭 시 서버 데이터 받아옴 */
  const onClick = () => {
    carListFilter();
  };
  /** 차량 검색 이벤트 핸들링 */
  const carNumberInputChange = (event) => {
    setCarNumber(event.target.value);
  };

  return (
    <Section>
      <h2>사고차량 정보</h2>

      <section>
        <h3>차량 번호</h3>
        <CarNumber>
          <Form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                value={carNumber}
                onChange={carNumberInputChange}
                placeholder="예) 100호1234"
                onKeyDown={onKeyDown}
              />
            </div>
          </Form>
          <div className="btnBox">
            <Button onClick={onClick}>조회</Button>
          </div>
        </CarNumber>
      </section>

      <section>
        <h3>차량명</h3>
        <Form>
          <div>
            <input placeholder="예) 쏘나타" defaultValue={searchedCarData} />
          </div>
        </Form>
        <CarOriginAndFactory>
          <h3>차량 구분</h3>
          <div className="btnBox">
            <Button100
              $isDomesticCar={isDomesticCar}
              onClick={handleIsDomesticCar}
            >
              국산차
            </Button100>
            <Button200
              $isDomesticCar={isDomesticCar}
              onClick={handleIsNotDomesticCar}
            >
              수입차
            </Button200>
          </div>
        </CarOriginAndFactory>
        <CarOriginAndFactory>
          <h3>차량 수리 공업사</h3>
          <div className="btnBox">
            <Button100>결정함</Button100>
            <Button100>미정</Button100>
          </div>
          <div className="desc">
            * 차량을 수리할 공업사가 정해졌는지 알려주세요.
          </div>
        </CarOriginAndFactory>
      </section>
    </Section>
  );
};

export default AcCarInfo;

//styled
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

const CarNumber = styled.div`
  display: flex;
  .btnBox {
    padding: 5px;
  }
`;

const CarOriginAndFactory = styled.div`
  .btnBox {
    display: flex;
    justify-content: space-around;
    margin: 4px;
  }
  .desc {
    color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }
`;
const Button = styled.button`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  height: 100%;
  padding: 0px 16px;
`;

const Button100 = styled(Button)`
  width: 100%;
  padding: 10px;
  margin: 0px 10px;
  background: ${(props) => (props.$isDomesticCar ? "blue" : "white")};
`;

const Button200 = styled(Button)`
  background: ${(props) => (props.$isDomesticCar ? "white" : "blue")};
`;
