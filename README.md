# :: 무신사 프론트엔드 과제
## 🔗 링크 
https://musinsa-frontend.vercel.app/

## 📚 기술스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%234B275F.svg?style=for-the-badge&logoColor=white)
![Emotion](https://img.shields.io/badge/emotion-%23B7178C.svg?style=for-the-badge&logoColor=white)

| 라이브러리           | 용도                                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| **React Query**      | api 데이터에서 받아온 서버 상태를 클라이언트 상태와 분리하여 관리하고 무한스크롤 처리를 위해 사용하였습니다.                                               |
| **emotion**          | CSS in JS 방식으로 CSS를 작성하고 CSS 재사용을 위해 사용하였습니다.                              |
| **react-router-dom** | 페이지 이동 처리 및 중첩 라우팅 사용을 위하여 react-router-dom v6를 사용하였습니다. url의 queryParam에서 데이터를 받아오기 위하여 useSearchParam을 사용하였습니다 |
| **axios**            | 비동기 HTTP 통신 처리를 위해 사용하였습니다.                                        |
| **typescript**       | type 안정성과 더 나은 개발 디버깅을 위해 사용하였습니다.                            |
| **zustand**       | 가벼운 상태관리 라이브러리를 살펴보던 중 typescript로 작성되어 있고 현업에서 사용해본 redux와 유사하며 동일한 dev-tool을 사용하여 선정하였습니다.     |

## 요구 사항
### 레이아웃
- [x] 상단 타이틀, 필터는 고정이 아닙니다.
### API 호출
- [x] page는 1~10까지 순차적으로 호출합니다.
- [x] 스크롤이 리스트 하단까지 내려오면 다음 리스트 항목이 노출되는 무한 스크롤로 구현 됩니다.
### 데이터 UI
- [x] api를 통해 전달받은 데이터 중 name, aliases, title, books, tvSeries 항목을 노출합니다. 
- [x] 특정 항목에  노출해야될 내용이 많을 경우, ellipsis를 사용해도 괜찮습니다. 
- [x] books, tvSeries는 항목 수를 노출합니다.
### 데이터 필터
- [x] 필터는 토글 형태로 처리되고 활성화 되어있으면 아래 리스트에 적용이 됩니다. 
- [x] 비활성화 가 되면 해제가 됩니다. 
- [x] 활성/비활성 여부가 시각적으로 구분되어야 합니다.
- [x] 필터는 중복 적용 가능합니다.
### 데이터 삭제
- [x] 리스트 아이템의 삭제 버튼을 누르면 리스트에서 사라집니다. 
- [x] 초기화 버튼을 누르면 다시 노출 됩니다.
### 페이징 설정
- [x] 해당 페이지 진입시 query params에 page를 명시하면 이 값이 리스트의 시작 page가 됩니다.

 
## 실행 방법

```bash
# CLONE REPOSITORY
git clone https://github.com/qkrwltn8976/musinsa_frontend.git
cd musinsa_frontend

# INSTALLATION & COMPILATION
npm install
npm run build

# START SERVER & STOP SERVER
npm run start
npm run stop
```

## :open_file_folder: 폴더 구조
```sh
src
 ┣ apis
 ┃ ┗ character.ts
 ┣ assets
 ┃ ┗ img
 ┃ ┃ ┣ close.svg
 ┃ ┃ ┗ spinner.gif
 ┣ components
 ┃ ┣ Filters
 ┃ ┃ ┣ Filters.style.ts
 ┃ ┃ ┗ index.tsx
 ┃ ┣ ItemList
 ┃ ┃ ┣ CharacterItem.tsx
 ┃ ┃ ┣ ItemList.style.ts
 ┃ ┃ ┗ index.tsx
 ┃ ┗ commons
 ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┣ Header.style.ts
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ Layout
 ┃ ┃ ┃ ┣ Layout.style.ts
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┗ Loading
 ┃ ┃ ┃ ┣ Loading.style.ts
 ┃ ┃ ┃ ┗ index.tsx
 ┣ constants
 ┃ ┗ queryKeys.constant.ts
 ┣ hooks
 ┃ ┣ commons
 ┃ ┃ ┗ useIntersectionObserver.ts
 ┃ ┗ queries
 ┃ ┃ ┗ useCharacters.ts
 ┣ pages
 ┃ ┗ Main
 ┃ ┃ ┗ index.tsx
 ┣ stores
 ┃ ┣ characterStore.ts
 ┃ ┗ filterStore.ts
 ┣ styles
 ┃ ┣ GlobalStyle.tsx
 ┃ ┣ box.ts
 ┃ ┣ font.js
 ┃ ┣ palette.ts
 ┃ ┗ root.css
 ┣ types
 ┃ ┣ character.ts
 ┃ ┣ chilldrenProps.ts
 ┃ ┗ filter.ts
 ┣ utils
 ┃ ┗ axios.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```
