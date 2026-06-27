# Portfolio — 손승범 (Son Seungbeom)

Astro로 만든 개인 포트폴리오 사이트. Swiss 미니멀 스타일의 단일 페이지로, 프로젝트·경력·기술 스택·연락처를 보여줍니다.

- **라이브:** https://asdfghjkkl.com
- **스택:** Astro 6 · 정적 사이트(SSG) · 의존성 없는 순수 CSS

## ✏️ 내용 수정

사이트의 모든 텍스트(프로필, 프로젝트, 경력, 스택)는 **`src/data/portfolio.ts`** 한 파일에 들어 있습니다. 이 파일만 고치면 됩니다.

```ts
export const profile = { /* 이름, 소개, 이메일, GitHub ... */ };
export const projects = [ /* 대표 프로젝트 목록 */ ];
export const experiences = [ /* 경력 */ ];
export const stack = [ /* 기술 스택 칩 */ ];
```

## 📁 구조

```text
/
├── public/                # 정적 자산 (그대로 배포)
│   ├── CNAME              # 커스텀 도메인 (asdfghjkkl.com)
│   ├── favicon.svg / .ico
│   ├── og.png             # 소셜 공유 미리보기 이미지
│   └── robots.txt
├── src/
│   ├── data/
│   │   └── portfolio.ts   # ← 사이트 콘텐츠 (여기만 수정)
│   ├── layouts/
│   │   └── Base.astro     # 공통 레이아웃 · <head> 메타 태그
│   ├── pages/
│   │   └── index.astro    # 단일 페이지 (Work / Experience / Stack / Contact)
│   └── styles/
│       └── global.css     # 전역 스타일
├── astro.config.mjs       # site URL + sitemap 통합
└── package.json
```

## 🧞 명령어

프로젝트 루트에서 실행합니다. (Node `>=22.12.0` 필요)

| 명령어            | 동작                                          |
| :---------------- | :-------------------------------------------- |
| `npm install`     | 의존성 설치                                   |
| `npm run dev`     | 개발 서버 실행 (http://localhost:4321)        |
| `npm run build`   | `./dist/` 로 프로덕션 정적 빌드               |
| `npm run preview` | 빌드 결과 로컬 미리보기                       |

## 🚀 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml` 이 자동으로 빌드해 **GitHub Pages** 로 배포합니다. 커스텀 도메인은 `public/CNAME` 으로 `asdfghjkkl.com` 에 연결되어 있습니다.

도메인 연결, DNS 레코드, GitHub 프로필 README 등 자세한 절차는 [`DEPLOY.md`](./DEPLOY.md) 를 참고하세요.
