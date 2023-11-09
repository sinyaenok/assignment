//외부
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid"; //랜덤 id 생성

//내부
import Loading from "./Loading";

/** 차량 데이터를 테이블로 보여주는 컴포넌트 */
const ListTable = ({ onFilteredApiData, onLoading, onSearchSuccess }) => {
  return (
    <TableSection>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>사고차량</th>
            <th>대여차량</th>
          </tr>
        </thead>

        <tbody>
          {onLoading ? ( //데이터가 안받아와졌다면
            <Loading /> //Loading 컴포넌트 출력
          ) : onSearchSuccess ? ( //검색 성공시
            onFilteredApiData?.map((data) => {
              //조회한 데이터 출력
              return (
                <tr key={uuidv4()}>
                  <td>{data.date}</td>
                  <td>{data.acCar}</td>
                  <td>{data.rtCar}</td>
                </tr>
              );
            })
          ) : (
            //검색 실패시
            <tr>
              <td></td>
              <td>검색 차량이 없습니다.</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </TableSection>
  );
};

export default ListTable;

const TableSection = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 10px;

  table {
    width: 100%;
    height: 100%;
    border-spacing: 0px; //테이블 사이 간격을 없애줌
  }
  th {
    font-size: 14px;
    font-weight: 400;
    padding: 4px 0px;
    background: rgba(0, 0, 0, 0.1);
  }
  td {
    font-size: 12px;
    padding: 10px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }
`;
