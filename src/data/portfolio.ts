// 포트폴리오 콘텐츠 데이터 — 이 파일만 수정하면 사이트 내용이 바뀝니다.

export const profile = {
  nameKo: '손승범',
  nameEn: 'Son Seungbeom',
  title: 'Full-Stack Developer',
  location: 'Korea',
  heroLine1: '웹과 모바일을',
  heroLine2: '만드는 개발자',
  intro:
    '프론트엔드부터 백엔드, 모바일까지. 커머스·광학 플랫폼을 5년간 만들어 온 풀스택 개발자입니다. 필요한 도구를 골라 끝까지 만들어내는 것을 좋아합니다.',
  email: 'asdfghjkkl11@naver.com',
  github: 'https://github.com/asdfghjkkl11',
  githubHandle: 'asdfghjkkl11',
  domain: 'https://asdfghjkkl.com',
  domainLabel: 'asdfghjkkl.com',
};

export type Project = {
  name: string;
  desc: string;
  stack: string;
  year: string;
  href?: string;
};

// 대표 프로젝트 (공개 저장소). 최신/완성도 순.
export const projects: Project[] = [
  {
    name: 'Pokémon Keycap',
    desc: '108키 풀사이즈 키보드용 포켓몬 키캡 매핑 도구',
    stack: 'SvelteKit',
    year: '2026',
    href: 'https://poke.asdfghjkkl11.com/',
  },
  {
    name: 'meso.gg',
    desc: '메이플스토리 데이터 검색 서비스 · 풀텍스트 검색 프론트엔드와 데이터 스크랩 서버',
    stack: 'Svelte · Node.js',
    year: '2026',
    href: 'https://meso.gg',
  },
  {
    name: 'plate-list',
    desc: 'SvelteKit 프론트엔드와 Node 서버로 구성한 풀스택 프로젝트 · 진행 중',
    stack: 'SvelteKit · Node.js',
    year: '2026',
  },
  {
    name: 'Keyboard Tester',
    desc: '기계식 키보드 입력 테스트 데스크톱 앱 · 입력 시각화',
    stack: 'Electron',
    year: '2026',
    href: 'https://drive.google.com/file/d/1uho8wlnmQMpOKCf_ZykaGByoRCn0vGEq/view?usp=sharing',
  },
  {
    name: 'Svelte Image Editor',
    desc: '브라우저에서 동작하는 이미지 편집기 · 크롭 / 필터 / 캔버스',
    stack: 'Svelte',
    year: '2025',
    href: 'https://github.com/asdfghjkkl11/svelte_image_editor',
  },
  {
    name: 'LostArk Card Manager',
    desc: '로스트아크 카드 정보 모음 및 관리 도구',
    stack: 'Svelte',
    year: '2023',
    href: 'https://github.com/asdfghjkkl11/LostArkCardManager',
  },
];

export type Experience = {
  company: string;
  note?: string;
  period: string;
  role: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: '주식회사 레티나 (Retina)',
    note: '前 히비스(hebees)',
    period: '2021.05 — 현재',
    role: '개발자 · Full-Stack',
    points: [
      '광학·커머스 플랫폼의 웹 / 관리자 / 모바일 전반 개발 (PC 웹, 셀러 어드민, 모바일 앱)',
      'Node.js 기반 다수 API 서버와 SvelteKit 프론트엔드 구축 · 운영',
      'Flutter 기반 모바일 앱 개발 및 결제 · 주문 시스템 연동',
      'Java / Go 백엔드 서비스 개발, 50+ 사내 저장소에 기여하며 핵심 서비스 다수 주도',
    ],
  },
];

// 기술 스택 (자신 있는 순)
export const stack: string[] = [
  'JavaScript / TypeScript',
  'Svelte / SvelteKit',
  'Node.js',
  'Flutter / Dart',
  'Java / Spring',
  'Go',
  'Python',
  'C++ / C#',
  'Kotlin',
  'PostgreSQL · SQLite',
  'Electron',
  'Docker',
];
