//외부
import styled from "styled-components";

//내부

export default function ListSearch({
  apiData,
  inputChange,
  onKeyDown,
  inputValue,
  onClick,
}) {
  console.log(apiData);

  return (
    <InputSection>
      <Form>
        <div className="inputbox">
          <input
            className="input"
            type="text"
            placeholder="사고가 발생한 차량명을 입력해주세요."
            defaultValue={inputValue}
            onChange={inputChange}
            onKeyDown={onKeyDown}
          />
        </div>
      </Form>
      <div className="buttonbox">
        <SearchBtn type="button" onClick={onClick}>
          검색
        </SearchBtn>
      </div>
    </InputSection>
  );
}
const InputSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .buttonbox {
    height: 45px;
    width: 75px;
  }
`;

const Form = styled.form`
  width: 70%;
  .inputbox {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #000;
  }
  .input {
    border: 0;
    width: 100%;
    outline: none;
  }
`;

const Button = styled.button`
  background: orange;
  border-radius: 3px;
  color: #fff;
  padding: 8px 10px;
  height: 100%;
  width: 100%;
`;
const SearchBtn = styled(Button)`
  margin-left: 5px;
`;
