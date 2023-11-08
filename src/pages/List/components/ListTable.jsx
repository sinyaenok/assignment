//외부
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid"; //랜덤 id 생성

const ListTable = ({ filteredResults, loading, apiData }) => {
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
          {loading
            ? apiData.map((data) => {
                return (
                  <tr key={uuidv4()}>
                    <td>로딩중</td>
                    <td>{data.date}</td>
                    <td>{data.acCar}</td>
                    <td>{data.rtCar}</td>
                  </tr>
                );
              })
            : filteredResults.map((data) => {
                return (
                  <tr key={uuidv4()}>
                    <td>{data.date}</td>
                    <td>{data.acCar}</td>
                    <td>{data.rtCar}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </TableSection>
  );
};

export default ListTable;

const TableSection = styled.section`
  max-width: 800px;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10px 0px 0px 0px;

  table {
    width: 100%;
    border-spacing: 0px;
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
