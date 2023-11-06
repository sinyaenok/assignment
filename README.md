# 검색, 조회 기능 구현 
* ## 배포 주소
  > https://sinyaenok.github.io/newassi/
<br>
<br>

* ## 사용 라이브러리
  > * React
  > * React-Router-Dom
  > * styled-components
  > * uuid
  > * axios

* ## 페이지/기능 설명
  ### List.jsx
   ![List.jsx](https://github.com/sinyaenok/assignment/assets/104334554/0d9d811a-2837-4ac6-b2cc-d202218627fa)

  > * 첫 렌더링 시, 서버에서 차량 리스트를 받아와 테이블에 뿌려준다. <br>
  > * 사고 차량을 검색할 시, 검색어를 차량 리스트에서 필터링하여 <br>
  > 해당하는 값을 테이블에 보여준다.
  > * '비대면 렌터카 요청하기' 버튼을 누르면 '/search' 페이지로 이동한다.
  
  ### Search.jsx
  ![Search.jsx](https://github.com/sinyaenok/assignment/assets/104334554/19c59dcf-b268-45e8-9d49-26386d54f524)
  ![Search.jsx](https://github.com/sinyaenok/assignment/assets/104334554/09592510-73b1-4ce2-8456-ffce9e7d8d0b)

  > * 운전자 정보 <br>
  >   * 연락처 11자리를 적으면 인증버튼 활성화 <br>
  >   * 이용지역 클릭시, 시, 구를 고를 수 있는 모달 생성.<br>
  >   해당 시와 구를 고르면 input값에 추가됨 <br>
  > * 사고차량 정보 <br>
  >   * input에 차량 번호를 입력 후 조회 버튼 클릭시, 서버 데이터를 조회.<br>
  >   해당 입력값이 데이터에 있다면, 서버에서 차량명을 보내줌.<br>
  >   차량명이 밑의 input값에 들어감. <br>
  >   * 차량 번호가 없을 경우, 차량 번호가 없으니 직접 차량명을 작성하라는 안내문구를 출력. <br>
  >   * input에 입력값이 없는 상태에서 조회 버튼 클릭시, 차량 번호를 입력하라는 안내 문구 출력. <br>
  >   * '국산차-수입차', '결정함-미정' 한개의 버튼을 클릭하면 다른 버튼이 비활성화됨. <br>
  > * 요청 정보<br>
  >   * 추가 요청 사항 작성 시, 글자 수에 따라 밑의 제한 글자수가 바뀜 <br>
  > * 작성 완료<br>
  >   * 모든 input과 버튼 클릭 시, 작성 완료 버튼이 활성화 됨. 
