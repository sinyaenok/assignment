//외부 라이브러리
import axios from "axios";
import styled from "styled-components";

/** 조건 충족시 post를 보내는 컴포넌트*/
const Complete = ({
  onIsResult,
  onSearchedCarName,
  onSearchCarNumber,
  onPhoneNumber,
}) => {
  /** 서버 주소 상수화 */
  const REGIST_API = import.meta.env.VITE_REGIST_API;
  /** !form-data로 수정 */
  const handleClickPostData = () => {
    const formData = new FormData();
    formData.append("result", onIsResult); // 사고 차량 조회 성공 여부
    formData.append("phone", onPhoneNumber); // 휴대폰 번호
    formData.append("carName", onSearchedCarName); // 차량 이름
    formData.append("carNumber", onSearchCarNumber); // 차량 번호

    axios
      .post(REGIST_API, formData)
      .then((response) => {
        alert("작성완료되었습니다.");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <CompleteBtnBox>
      <button
        className="completeBtn"
        disabled={!onIsResult}
        onClick={handleClickPostData}
      >
        작성 완료
      </button>
    </CompleteBtnBox>
  );
};

export default Complete;

//styled
const CompleteBtnBox = styled.div`
  height: 50px;
  width: 100%;
  .completeBtn {
    background: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
`;
