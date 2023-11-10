# 검색, 조회 기능 구현

- ## 배포 주소

  > https://sinyaenok.github.io/newassi/
  <br>
  <br>
  <br>
  
- ## 사용 라이브러리

  > - React
  > - React-Router-Dom
  > - react-spinners
  > - styled-components
  > - uuid
  > - axios
  <br>
  <br>
  <br>

- ## 페이지/기능 설명
    2개의 페이지로 이루어져 있고, 서버에서 데이터를 검색하고 조회하고 필터링 후 POST하는 기능이 있습니다.
  
  ### 💛List.jsx 

  ![1](https://github.com/sinyaenok/newassi/assets/104334554/fbc00110-616b-409b-8592-1c14c097a6ae)
  > 첫 렌더링 시, 서버에서 차량 리스트를 받아와 테이블에 뿌려줍니다. <br>
  > '비대면 렌터카 요청하기' 버튼을 누르면 '/search' 페이지로 이동합니다. <br>
  <br>
  <br>
  
  ![2](https://github.com/sinyaenok/newassi/assets/104334554/8c6aa898-bd8a-4314-8f35-3c2237e20241)
  >   검색어 입력 시, 차량 리스트에서 필터링하여 <br>
  >   해당하는 값을 테이블에 보여줍니다. <br>
  <br>
  <br>
  
  ![3](https://github.com/sinyaenok/newassi/assets/104334554/6d291c34-028b-402e-b933-fbdb1d4194d5)
  >   검색한 차량이 차량리스트에 없을 시, 검색 데이터가 없다고 출력해줍니다. <br>
  <br>
  <br>
  
  ![4](https://github.com/sinyaenok/newassi/assets/104334554/c9800a4d-476b-4be8-a7b3-ad9b69a774b7)
  >   빈 검색어를 입력 시, 검색어를 입력하라는 안내문구와 함께 기존 차량 리스트를 다시 보여줍니다.
  
  <br>
  <br>
  <br>

  ### 💛Search.jsx
![Search.jsx1](https://github.com/sinyaenok/newassi/assets/104334554/5f07d9cd-bb3d-4bf6-9e30-751f65dddbec)
![Search.jsx2](https://github.com/sinyaenok/newassi/assets/104334554/eac3ac98-237b-43b3-b1d5-49af820e64ab)
  <br>
  <br>

  - #### 운전자 정보
  ![인증1](https://github.com/sinyaenok/newassi/assets/104334554/cec53c9d-69b1-4baa-8a2a-831061171677)
  > 휴대폰 11자리를 입력하면 인증버튼이 활성화 됩니다. <br>
  > 인증버튼 클릭 시 인증 인풋창이 아래에 나옵니다. <br>
  <br>
  <br>
  
  ![5](https://github.com/sinyaenok/newassi/assets/104334554/29ec9b6f-b3ac-4618-9016-974614a5af62)
  ![7](https://github.com/sinyaenok/newassi/assets/104334554/2b1d3dd7-f326-49b0-ae19-b5a8bf9833fe)
  > 인증번호는 6자리를 입력해야 하고, 6자리가 아닐 경우에는 <br>
  > 다시 입력해달라는 안내 문구를 출력합니다. <br>
  <br>
  <br>
  
  ![재인증](https://github.com/sinyaenok/newassi/assets/104334554/d2f0876d-c7ca-45d7-9013-b6c189215a95)
  ![6](https://github.com/sinyaenok/newassi/assets/104334554/e0494882-c6ff-4c77-afbd-164dd4441e53)
  > 인증번호 6자리를 입력하면 인증되었다는 안내 문구를 출력합니다. <br>
  <br>
  <br>
  
  - #### 사고차량 정보
  ![차량조회1](https://github.com/sinyaenok/newassi/assets/104334554/e7982786-8ddf-477a-898c-56781e6bfff5)
  > 차량 번호를 입력 후 조회 버튼 클릭시, 서버 데이터를 조회합니다<br>
  > 해당 입력값이 서버 데이터에 있다면, 데이터를 보내줍니다. <br>
  > 데이터에서 차량명(carName)을 필터링하여 밑의 차량명 input에 넣어주어 출력합니다. <br>
  <br>
  <br>
  
  ![차량조회2](https://github.com/sinyaenok/newassi/assets/104334554/4088437a-e404-458d-a463-d3f33fad2d15)
  ![차량조회2-2](https://github.com/sinyaenok/newassi/assets/104334554/d3374d35-4de5-4eac-b029-c023f555bc82)
  > 차량 번호가 서버데이터에 없을 경우, '차량 번호가 없으니 직접 차량명을 작성하라는 안내문구'를 출력하고, 입력칸은 리셋합니다.<br>
<br>
<br>

![차량조회3](https://github.com/sinyaenok/newassi/assets/104334554/6c1dffdd-926e-4f19-ad3f-049820559120)
![차량조회3-3](https://github.com/sinyaenok/newassi/assets/104334554/47cea98b-66e4-4b22-8d87-cae7384551af)
  > 입력값이 없는 상태에서 조회 버튼 클릭시, '차량 번호를 입력하라는 안내문구'를 출력하고, 인풋칸은 리셋합니다.<br>
  <br>
  <br>
  
![차량 클릭1](https://github.com/sinyaenok/newassi/assets/104334554/842a0520-bc64-4284-8007-c5c7dcdc61c7) <br>
  > '국산차-수입차', '결정함-미정' 한개의 버튼을 클릭하면, <br>
  > 다른 버튼이 비활성화 됩니다.

![차량클릭2](https://github.com/sinyaenok/newassi/assets/104334554/615daac3-682e-4a01-88a4-12e23d884d98) <br>
<br>
<br>

- #### 요청 정보
  ![요청 글자](https://github.com/sinyaenok/newassi/assets/104334554/9a33646b-6d80-4bee-84b0-3061b0ac7812) <br>
  > 추가요청사항을 작성할 수 있는데, 제한 글자수가 있습니다. <br>
  <br>
  <br>
  
  ![추가 요청사항](https://github.com/sinyaenok/newassi/assets/104334554/21018612-f88e-469a-b59a-c5cda6389dda)
  > 제한 글자수를 넘어가면 작성되지 않습니다. <br>
  <br>
  <br>
  
- #### 작성 완료<br>
  ![완료1](https://github.com/sinyaenok/newassi/assets/104334554/e4e82d77-913c-426d-bef7-bc40e02a1ecc) <br>
  ![작성완료2](https://github.com/sinyaenok/newassi/assets/104334554/273e73bd-0114-4411-a80f-44bd6ccda91d) <br>

  > 차량 조회 성공 시, 작성 완료 버튼이 활성화 됩니다. <br>
  > 버튼 클릭시, 작성 완료 되었다는 안내문구를 출력합니다.
