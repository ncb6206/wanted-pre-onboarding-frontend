# 투두리스트 관리 웹사이트
회원가입과 로그인을 통해 자신의 투두리스트를 안전하게 보관하고, 접근할 수 있는 웹사이트입니다.

- [**`배포링크`**](https://natest.shop)

<br/>

## 프로젝트 실행 방법
```bash
$ npm install
$ npm start
```

<br/>


## 개발 전략

Top-down 방식을 사용하여 프로젝트의 전체적인 구조를 먼저 설계하고, 이를 기반으로 세부적인 구현을 수행하여 전체적인 구조가 일관성 있게 유지되도록 개발하였습니다.

<br/>

## 기능 목록

### Home

| TOKEN❌                        | TOKEN⭕️          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/677fbd2f-169c-43ef-982f-c8eaadf737e2" /> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/f75d0e3d-f0a9-46e8-b016-db613091d42c"/> |
| · `시작하기` 클릭 시 /signin 경로 이동                                                                                       | · `시작하기` 클릭 시 /todo 경로로 이동                                                                                      |

<br>

### Sign up & Sign in

| Sign up 성공                                                                                                                | Sign in 성공                                                                                                                | 유효성 검사                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/9f77891a-9ea8-46b7-bfbd-861a1571af83"/> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/03d7c03b-f844-460c-836c-3688e0a81722"/> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/c5632d52-4dca-4104-b83c-df7959cd6424" /> |
| · /signin 경로로 이동                                                                                                       | · /todo 경로로 이동 <br> · 응답받은 JWT 로컬 스토리지에 저장                                                                | · 이메일 조건: @포함 <br> · 비밀번호 조건 : 8자 이상 <br> · 유효성 검사 통과 시 버튼 활성화                                  |

<br>

### To do list

| 데모 영상                                                                                                                              | 기능                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/abc81c27-aebd-4df0-bd7e-988ca5682624" /> | · 투두 리스트 목록 조회 <br> · 🍋 아이콘을 통해 `To do` 완료 여부 표시 <br> · `+` 버튼을 클릭하여 새로운 `To do` 추가 <br> · `수정` 버튼을 클릭 시, 수정모드 활성화 <br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용 업데이트 <br> · 수정모드에서 `취소` 버튼 클릭 시, 수정한 내용 초기화 및 수정모드 비활성화 <br> · `삭제` 버튼 클릭 시 해당 아이템 삭제 |

<br>

### Nav & Redirect

| 데모 영상                                                                                                                              | 기능                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/b62174da-1fc4-447e-a410-cd6db9b1d0a4" /> |Router에서 redirect 관리를 하여 깜빡임 에러를 해결하였습니다. <br> PrivateRouter컴포넌트에서 토큰의 존재 여부에 따라 사용자를 Redirect 시킵니다.<br><br> · `TOKEN⭕️` : /signin, /signup 경로 접속 시 /todo 경로로 리다이렉트 <br> · `TOKEN❌` : /todo 경로로 접속 시 /signin 경로로 리다이렉트 |


<br/>

## 기술 스택 & 사용 라이브러리

| 구분    | 스택 & 라이브러리                                    |
| ---------- | ---------------------------------------------- |
| 언어  | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">                 |
| 메인 라이브러리  | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">                 |
| 기타 라이브러리   | <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"><img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion"><img src="https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios"> |
| 패키지 관리   | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm"> |
| 배포   | <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws"> |
