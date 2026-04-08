# 🌐 thenovary 브랜드 홈페이지 제작 최종 요구사항 정의서 (v2.2_Master)

## 1. 프로젝트 개요
* **브랜드명:** thenovary (Nova: 혁신 + -ary: 성격 / 새로운 것을 만드는 존재)
* **구조:** 여러 앱을 아우르는 상위 브랜드 스튜디오 (Parent App Studio)
* **도메인:** 현재 https://thenovary.github.io/ (커스텀 도메인 .com 등 연결 예정)
* **보안:** GitHub Pages 설정 내 **Enforce HTTPS** 강제 적용 필수
* **공식 문의:** infodeskline@gmail.com
* **카피라이트:** © 2026 thenovary. All rights reserved.

---

## 2. 브랜드 카피 및 문구 (Main Copy)
* **Primary:** "The Clearest Start. Pure Innovation, Pure Experience."
* **Secondary:** 가장 선명한 시작. 혁신을 일상의 감각으로 빚어내는 thenovary의 앱 시리즈를 만나보세요.

---

## 3. 디자인 가이드라인 (iOS System & Apple Style)
* **컨셉:** **iOS-inspired Minimalist** / Futuristic but Warm
* **비주얼 효과:** - **Glassmorphism:** 상단 GNB 및 모달창에 배경 비침 효과 적용 (`backdrop-filter: blur(20px);`)
    - **Squircle Corners:** 모든 카드 및 버튼에 iOS 특유의 부드러운 곡선 적용
    - **Aurora Glow:** 무거운 이미지 대신 **CSS (filter: blur(80px);)**를 활용한 가벼운 오로라 배경 (Blue-Cyan-Violet)
* **디자인 일관성:**
    - 모든 페이지 상단 GNB 및 하단 Footer 디자인/위치 동일 고정 (Layout 컴포넌트화)
    - 페이지 전환 시 레이아웃 흔들림 방지 및 부드러운 애니메이션(Fade-in 등) 적용
* **모드 설정:** 브랜드 정체성 유지를 위해 **라이트 모드 고정 (Light Mode Only)**
* **폰트:** 상업적 무료 (**Pretendard** / **Inter**) - macOS Retina 디스플레이 최적화

---

## 4. 사이트 구조 및 다국어·라이선스 정책

### 1) 페이지 구성 (Information Architecture)
* **메인 홈 (Home):** 브랜드 정체성 및 전체 앱 리스트 대시보드
* **각 앱 상세 페이지:** 각 앱마다 아래 **5가지 메뉴**를 고정 레이아웃으로 제공 (개발사: thenovary 노출)
    1. **앱 소개:** 기능 및 주요 특징 설명
    2. **개인정보 처리방침 (Privacy Policy):** 각 앱 지원 언어별 변환 지원
    3. **서비스 이용약관 (Terms of Service):** 각 앱 지원 언어별 변환 지원
    4. **고객지원 (Support):** 문의 안내 및 지원 페이지 (언어별 변환)
    5. **라이선스 (License):** 해당 앱 에셋 표기 (통합 페이지와 연동 권장)
* **통합 라이선스 및 제작자 페이지:** 모든 앱의 라이선스 정보를 한곳에서 통합 관리 및 열람

### 2) 다국어 및 라이선스 운영 정책
* **사이트 전체:** 영문(EN) / 국문(KO) 기본 지원 (iOS 세그먼트 컨트롤 스타일 토글 UI)
* **텍스트 변환:** 앱 소개, 약관, 고객지원 등 모든 본문은 선택된 언어로 실시간 변환
* **라이선스 표기 규칙:**
    - 인터페이스(제목, 버튼 등)는 영/한 번역을 지원함
    - **단, 라이선스 본문(원문)은 반드시 영어로만 표기** (예: "Design Assets" by Arzu Cetinkaya (Licensed under CC BY 4.0))

---

## 5. 기술 및 유연성 요구사항
* **반응형 웹:** PC, 태블릿, 모바일 완벽 대응 (도메인 변경 대비 상대 경로 설계)
* **성능 최적화:** 이미지 지연 로딩(Lazy Loading) 및 코드 경량화(Minification) 필수
* **운영 편의성:** 텍스트 하드코딩 금지. `ko.json`, `en.json` 혹은 **Markdown(.md)** 수정만으로 문구가 바뀌는 구조
* **사용자 경험(UX):** - 모바일 클릭 요소의 **터치 영역 최소 44x44px 확보** (디자인은 슬림하게 유지)
    - 버튼 클릭 시 미세한 반응(Scale Down 효과 등)으로 iOS 특유의 햅틱 피드백 재현
* **SEO 및 브랜딩 에셋:** 브랜드 로고 기반 **Favicon**, 오로라 테마 **OG 이미지**, Meta Tag 및 Canonical URL 설정

---

## 6. 개발 지시 사항
* **코드 주석:** 향후 유지보수를 위해 주요 섹션별 주석 상세 작성
* **확장성:** 신규 앱 추가 시 데이터 파일(JSON/MD) 추가만으로 상세 페이지 자동 생성 구조 설계
* **배포 구조:** GitHub Pages 환경에 최적화된 리포지토리 구성 및 자동 배포 설정 권장