# wanted-pre-onboarding-frontend

원티드 프리온보딩 프론트엔드 - 선발 과제용 레파지토리입니다

## 지원자 성명

나규태

## 프로젝트의 실행 방법
```bash
npm install
npm start
```  

## 배포 사이트

[배포 링크](https://natest.shop)

## 개발 전략

Top-down 방식을 사용하여 프로젝트의 전체적인 구조를 먼저 설계하고, 이를 기반으로 세부적인 구현을 수행하여 전체적인 구조가 일관성 있게 유지되도록 개발하였습니다.

## 디렉토리 구조

```
📦
├─ src
│  ├─ api
│  ├─ components
│  ├─ hooks
│  ├─ routes
│  │  ├─ root(Home)
│  │  ├─ signin
│  │  ├─ signup
│  │  └─ todo
└─ └─ styles
```
- 백엔드 uri를 사용하기 위하여 api폴더를 만들었습니다.<br/>
- 프로젝트의 컴포넌트 구조를 정의하고, 컴포넌트들을 관리하기 위해 components폴더를 만들었습니다.<br/>
- customhook을 사용하기 위하여 hooks폴더를 만들었습니다.<br/>
- 페이지를 구성하는 컴포넌트들을 정의하기 위해 route폴더를 만들었습니다.<br/>
- resetCSS를 사용하기 위하여 styles폴더를 만들었습니다.

## 사용 라이브러리

| 라이브러리    | 사용 이유                                    |
| ---------- | ---------------------------------------------- |
| <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">  | 사전과제에서 정해준 라이브러리라서 사용하였습니다.                 |
| <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">   | 리액트에서 페이지를 나누고 라우팅을 쉽게 구현하기 위해서 사용하였습니다. |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=black">    | 명시적인 정적타입을 지정하여 컴파일 단계에서 오류를 포착하기 위해 사용하였습니다. |
| <img src="https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logoColor=black">   | CSS-in-JS라이브러리이고 styled-components와 호환되며 확장성에 좋기 때문에 사용하였습니다. |
| <img src="https://img.shields.io/badge/antdesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=black">   | 깔끔한 UI를 사용하기 위하여 사용하였습니다. |
| <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">   | HTTP 비동기 통신을 하기 위해 사용하였습니다. |
