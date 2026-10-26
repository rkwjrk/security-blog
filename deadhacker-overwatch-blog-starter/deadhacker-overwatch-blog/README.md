# DEADHACKER — Overwatch-inspired Jekyll blog

오버워치 2의 메인 메뉴에서 영감을 받은 다크/SF 스타일의 정보보안 블로그 스타터입니다. 공식 게임 로고나 게임 아트워크는 포함하지 않고, 색상·메뉴 구성·HUD 분위기만 참고합니다.

## 1. GitHub 저장소 준비

1. GitHub에서 새 저장소를 만듭니다. 예: `security-blog`
2. 이 프로젝트 파일을 저장소 루트에 업로드합니다.
3. `_config.yml`을 열어 아래 항목을 수정합니다.

```yml
url: "https://YOUR_GITHUB_USERNAME.github.io"
baseurl: "/YOUR_REPOSITORY_NAME"
```

예를 들어 저장소가 `https://github.com/topiary/security-blog`라면:

```yml
url: "https://topiary.github.io"
baseurl: "/security-blog"
```

사용자 사이트 저장소인 `YOUR_GITHUB_USERNAME.github.io`를 만들었다면 `baseurl: ""`로 설정합니다.

## 2. GitHub Pages 배포

1. 저장소의 **Settings → Pages**로 이동합니다.
2. Build and deployment의 Source를 **Deploy from a branch**로 설정합니다.
3. Branch는 `main`, 폴더는 `/ (root)`를 선택하고 Save를 누릅니다.
4. 빌드가 끝나면 `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`에서 확인합니다.

`github-pages` Gemfile은 로컬 개발에 사용합니다. GitHub Pages는 지원되는 Jekyll 플러그인만 사용할 수 있습니다.

## 3. 로컬에서 실행하기 (선택)

Ruby와 Bundler가 설치된 환경에서:

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://127.0.0.1:4000/YOUR_REPOSITORY_NAME/`를 엽니다. 로컬 실행 환경의 Ruby 버전이나 플랫폼에 따라 추가 패키지가 필요할 수 있습니다.

## 4. 새 게시글 추가

`_posts/` 폴더에 `YYYY-MM-DD-title.md` 형식으로 파일을 추가합니다.

```markdown
---
layout: post
title: "제목"
date: 2026-10-26 21:00:00 +0900
description: "검색과 목록에 표시될 요약"
categories: [web-security]
tags: [ctf, notes]
---

## 개요

본문을 Markdown으로 작성합니다.
```

게시글은 날짜 역순으로 메인 페이지와 `/blog/` 목록에 표시됩니다. `categories`와 `tags`는 검색 대상에 포함됩니다.

## 5. 주요 경로

- `index.html`: 메인 메뉴 및 최근 게시글
- `blog/index.html`: 검색 가능한 게시글 아카이브
- `about.md`: 프로필
- `_layouts/default.html`: 공통 헤더/푸터
- `_layouts/post.html`: 게시글 상세 레이아웃
- `assets/css/style.css`: 디자인, 반응형 레이아웃, 애니메이션
- `assets/js/main.js`: 모바일 메뉴와 게시글 검색
- `_posts/`: Markdown 게시글

## 6. 커스터마이징

- 브랜드명: `_layouts/default.html`, `index.html`
- 색상: `assets/css/style.css`의 `:root` 변수
- 메뉴/카드: `index.html`
- 프로필: `about.md`
- 검색 가능한 메타데이터: 게시글 front matter의 `description`, `categories`, `tags`

## 보안 및 라이선스 메모

실서비스 비밀정보, API 키, 개인 데이터, 실제 대상의 민감한 요청/응답을 공개하지 마세요. 취약점 실습은 본인 소유 또는 명시적으로 허가된 환경에서 수행하세요. 이 프로젝트는 오버워치의 공식 자산을 포함하지 않으며 비공식 팬 영감 디자인입니다.
