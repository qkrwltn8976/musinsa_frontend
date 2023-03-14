# :: 무신사 프론트엔드 과제
## 📚 기술스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

| 라이브러리           | 용도                                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| **React Query**      | 서버 상태 관리를 위해 사용하였습니다.                                               |
| **emotion**          | CSS in JS 방식으로 CSS를 작성하기 위해 사용하였습니다.                              |
| **react-router-dom** | 페이지 이동 처리 및 중첩 라우팅 사용을 위하여 react-router-dom v6를 사용하였습니다. |
| **axios**            | 비동기 HTTP 통신 처리를 위해 사용하였습니다.                                        |
| **typescript**       | type 안정성과 더 나은 개발 디버깅을 위해 사용하였습니다.                            |


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
