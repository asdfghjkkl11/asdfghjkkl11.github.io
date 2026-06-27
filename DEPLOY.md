# 배포 가이드 — 포트폴리오 + GitHub 프로필

## 0. 로컬에서 보기

```powershell
# 시스템 Node(26.x) 사용
$env:Path = "C:\Program Files\nodejs;" + $env:Path
cd C:\Users\asdfg\Documents\git\asd\portfolio
npm run dev       # 개발 서버 (http://localhost:4321)
npm run build     # 정적 빌드 → dist/
npm run preview   # 빌드 결과 미리보기
```

내용을 바꾸려면 **`src/data/portfolio.ts`** 한 파일만 수정하면 됩니다.

---

## 1. 포트폴리오 사이트 배포 (GitHub Pages + asdfghjkkl.com)

### 1-1. 저장소 만들고 푸시
```powershell
cd C:\Users\asdfg\Documents\git\asd\portfolio
git init
git add .
git commit -m "feat: Astro portfolio (Swiss minimal)"
git branch -M main
# GitHub에서 'portfolio' (또는 원하는 이름) repo 생성 후:
git remote add origin https://github.com/asdfghjkkl11/portfolio.git
git push -u origin main
```

### 1-2. GitHub Pages 활성화
- GitHub repo → **Settings → Pages**
- **Source** 를 **GitHub Actions** 로 설정
- `.github/workflows/deploy.yml` 가 자동으로 빌드·배포합니다 (push 시마다)

### 1-3. 커스텀 도메인 연결 (asdfghjkkl.com)
- `public/CNAME` 에 이미 `asdfghjkkl.com` 이 들어 있습니다.
- GitHub repo → **Settings → Pages → Custom domain** 에 `asdfghjkkl.com` 입력 → Save
- **도메인 등록업체 DNS** 에 아래 레코드 추가:

  | 타입 | 호스트 | 값 |
  |------|--------|-----|
  | A | @ | 185.199.108.153 |
  | A | @ | 185.199.109.153 |
  | A | @ | 185.199.110.153 |
  | A | @ | 185.199.111.153 |
  | CNAME | www | asdfghjkkl11.github.io |

- DNS 전파 후 (수 분~수 시간) **Enforce HTTPS** 체크
- 결과: `https://asdfghjkkl.com` 와 `https://asdfghjkkl11.github.io/portfolio` 양쪽에서 접속 가능

> ⚠️ 커스텀 도메인을 쓰면 `astro.config.mjs` 의 `site` 가 루트(`/`)이므로 그대로 두면 됩니다.
> 만약 도메인 없이 `github.io/portfolio` 로만 쓸 경우 `base: '/portfolio'` 설정이 추가로 필요합니다.

---

## 2. GitHub 프로필 README 배포

1. `asdfghjkkl11` 이라는 **이름이 본인 아이디와 똑같은** repo를 새로 만듭니다 (Public, README 포함).
   - 즉 `github.com/asdfghjkkl11/asdfghjkkl11`
2. `github-profile/README.md` 내용을 그 repo의 `README.md` 로 올립니다.

```powershell
cd C:\Users\asdfg\Documents\git\asd\github-profile
git init
git add README.md
git commit -m "docs: profile README"
git branch -M main
git remote add origin https://github.com/asdfghjkkl11/asdfghjkkl11.git
git push -u origin main
```

3. `github.com/asdfghjkkl11` 방문 시 프로필 카드가 보입니다.

---

## 체크리스트
- [ ] portfolio repo 생성 & push
- [ ] Settings → Pages → Source = GitHub Actions
- [ ] Custom domain = asdfghjkkl.com 입력
- [ ] DNS A/CNAME 레코드 등록
- [ ] Enforce HTTPS
- [ ] asdfghjkkl11/asdfghjkkl11 repo 생성 & README push
