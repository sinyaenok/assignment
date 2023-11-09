//외부 라이브러리
import styled from "styled-components";

//내부

/** List의 검색창과 검색버튼을 담은 컴포넌트  */
export default function ListSearch({
  onSearchValue,
  onHandleSearchValue,
  onHandleEnterPress,
  onHandleClickSearchFilter,
}) {
  return (
    <ListSection>
      <div className="searchInputBox">
        <input
          className="searchInput"
          type="text"
          placeholder="사고가 발생한 차량명을 입력해주세요."
          defaultValue={onSearchValue}
          onChange={onHandleSearchValue}
          onKeyDown={onHandleEnterPress}
        />
      </div>

      <div className="searchBtnBox">
        <SearchBtn type="button" onClick={onHandleClickSearchFilter}>
          검색
        </SearchBtn>
      </div>
    </ListSection>
  );
}
const ListSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 12px;

  .searchInputBox {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 80%;
  }
  .searchInput {
    border: 0;
    width: 100%;
    outline: none;
  }
  .searchBtnBox {
    width: 20%;
  }
`;

const SearchBtn = styled.button`
  background: orange;
  height: 100%;
  width: 100%;
  color: white;
  border-radius: 2px;
  padding: 8px 10px;
  margin-left: 5px;
`;
