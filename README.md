# 투두리스트 관리 웹사이트

회원가입과 로그인을 통해 자신의 투두리스트를 안전하게 보관하고, 접근할 수 있는 웹사이트입니다.

- [**`배포링크`**](https://natest.shop)

<br/>

## 기능 목록

### Home
- Router를 통해 리다이렉션을 관리함으로써 페이지 깜빡임 문제를 해결하였습니다. 
- PrivateRouter 컴포넌트는 액세스 토큰의 존재 여부에 따라 사용자를 적절한 경로로 리다이렉트합니다.

> · 액세스 토큰이 없는 경우 : `/todo` 경로로 접속 시 `/signin` 경로로 리다이렉트됩니다. <br/>
> · 액세스 토큰이 존재하는 경우 : `/signin` 또는 `/signup` 경로에 접근 시, 사용자는 자동으로 `/todolist` 경로로 리다이렉트됩니다.

| 액세스 토큰이 없는 경우    | 액세스 토큰이 존재하는 경우        |
| ----------------- | ----------------------- |
| <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/f78d1887-49d3-4730-bd4a-867dd862f6aa" /> | <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/8fdaaad9-de16-48d8-a44e-a8ed97384c2a"/> |
| · `시작하기`버튼 클릭 시 `로그인(Signin)` 페이지로 이동       | · `시작하기`버튼 클릭 시 `TodoList` 페이지로 이동       |

<br>

### Sign up & Sign in

| 회원가입(Sign up) 성공   | 로그인(Sign in) 성공     | 
| -------- | ------------- | 
| <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/d620727f-d16c-4b6a-80da-31d3a056848f"/> | <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/477d658c-d77e-495b-a5b9-6d5d46df8031"/> | 
| · 회원 가입이 성공적으로 완료되면 사용자를 `로그인(Signin)`  <br/> 페이지로 자동 리디렉션    | · 로그인이 성공적으로 완료되면 사용자를 `투두리스트(todolist)` <br> 페이지로 자동 리디렉션 <br><br> · 서버로부터 응답 받은 액세스 토큰을 로컬 스토리지에 저장      |   

<br>

### Validation & Sign out

| 유효성 검사    |   로그아웃    |
| --------- | -------- |
| <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/b8997be0-597a-40ca-bd28-2f5d80bf5e8d" /> | <img width=600 src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/aed000ed-69d8-4387-9bd8-4d711e874a0c" /> |
· 이메일 유효성 검사 : '@' 문자를 포함하는 형식 <br><br> · 비밀번호 유효성 검사 : 최소 8자 이상의 문자열 <br><br> · 모든 유효성 검사가 통과될 경우, 해당 버튼이 활성화되도록 구현 | · 로그아웃 버튼을 클릭하면, 로컬 스토리지에 저장된 액세스 토큰이 제거되도록 구현

<br>

### To do list

| 투두리스트 추가    | 투두리스트 수정    |
| --------- | -------- |
| <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/3f9832c3-aa38-4f0e-a6d5-e8b3604143ca" /> | <img src="https://github.com/ncb6206/wanted-pre-onboarding-frontend/assets/62326659/4ef3f35f-4200-4300-80e6-e7cb44c6c779" /> |
· 투두 리스트의 전체 목록을 조회하는 기능을 구현 <br><br> · 입력 필드를 통해 새로운 To-do 항목의 내용을 입력 <br><br> · `추가` 버튼 클릭 시, 입력한 내용이 새로운 To-do 항목으로 추가되도록 구현  | · `수정` 버튼을 클릭 시, 수정모드 활성화 <br><br> · `체크` 표시를 사용하여 To-do 항목의 완료 상태를 시각적으로 표현 <br><br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용이 반영되어 업데이트 <br><br> · 수정모드에서 `취소` 버튼 클릭 시,  변경사항은 무시되고 원래의 내용으로 복원되며, 동시에 수정 모드 비활성화 <br><br> · `삭제` 버튼 클릭 시, 해당 To-do 항목이 목록에서 제거 |


<br>

## 프로젝트 개발 환경 세팅

```bash
$ npm install
$ npm start
```

<br/>

## 개발 전략

Top-down 방식을 사용하여 프로젝트의 전체적인 구조를 먼저 설계하고, 이를 기반으로 세부적인 구현을 수행하여 전체적인 구조가 일관성 있게 유지되도록 개발하였습니다.

<br/>

## 기술 스택 & 사용 라이브러리

| 구분            | 스택 & 라이브러리                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 언어            | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">                                                                                                                                                                                                                                                                            |
| 메인 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">                                                                                                                                                                                                                                                                                      |
| 기타 라이브러리 | <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black"> <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion"> <img src="https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge"> |
| 패키지 관리     | <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm">                                                                                                                                                                                                                                                                                                          |
| 배포            | <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws">                                                                                                                                                                                                                                                                                              |

## ETC

동일한 주제에 대해 프론트엔드 개발 팀의 5명의 멤버들이 협력하여 프로젝트를 진행하였습니다.

- [**`팀깃허브 링크`**](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12)
