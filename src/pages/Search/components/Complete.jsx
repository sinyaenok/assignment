import styled from "styled-components";

/** 조건 충족시 post를 보내는 컴포넌트*/
const Complete = () => {
  return (
    <CompleteBtnBox>
      <button className="completeBtn" disabled>
        작성 완료
      </button>
    </CompleteBtnBox>
  );
};

export default Complete;

//styled
const CompleteBtnBox = styled.div`
  height: 100%;
  width: 100%;
  .completeBtn {
    background: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;
