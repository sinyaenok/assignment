//외부
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const List = () => {
  const [carName, setCarName] = useState("");
  const [list, setList] = useState("");

  //입력창 이벤트
  const onChange = (e) => {
    setCarName(e.target.value);
    console.log(carName);
  };

  //버튼 클릭시 이동
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/search");
  };
  //데이터 확인
  const fetchData = () => {
    axios
      .get("https://tools.handle.im/dummy/list")
      .then((res) => setList(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <div>image</div>
        <h1>내가 렌트 할 수 있는 차량은?</h1>
      </header>
      <main>
        <form>
          <input
            type="text"
            placeholder="사고가 발생한 차량명을 입력해주세요."
            value={carName}
            onChange={onChange}
          />
        </form>
        <Button>검색</Button>
        <div>
          테이블 안에 표
          <table>
            <thead>
              <tr>
                <th>날짜</th>
                <th>사고차량</th>
                <th>대여차량</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(list).map((lis) => (
                <tr key={uuidv4()}>
                  <th>{lis.date}</th>
                  <th>{lis.acCar}</th>
                  <th>{lis.rtCar}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>페이지 네이션</div>
      </main>
      <footer>
        <Button onClick={navigateToSearch}>
          비대면 렌터카 요청하기, 클릭시 사이트 이동
        </Button>
      </footer>
    </>
  );
};

export default List;
//styled
const Button = styled.button`
  background: orange;
  color: #fff;
`;
