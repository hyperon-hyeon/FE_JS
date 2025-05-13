# FE_JS

# #1 Introduction

## 준비물

- 크로미움 기반 브라우저 - Google Chrome, Naver Whale, Brave
    - 크로미움이란?
        - 크로미움(Chromium): 구글에서 개발한 오픈 소스 웹 브라우저 프로젝트
        - 크로미움 기반 브라우저 - Google Chrome, Microsoft Edge, Naver Whale, Brave
        - 오픈소스, 최신 앱 표준 지원, 확장성, 플랫폼 호환성, 멀티 프로세스 아키텍처, 정기적 업데이트
            - 각 탭이나 플러그인이 독립된 프로세스로 실행되어 안정성이 높음
            - 하나의 탭에서 오류가 발생해도 전체 브라우저가 멈추지 않음
- VS Code
    - 설치할 수 없는 상황이라면?
        
        [**Replit](https://replit.com/):** 온라인 통합 개발 환경(Integrated Development Environment, IDE)
        
        - 웹 브라우저만 있으면 코드를 작성, 실행, 협업하고 배포까지 할 수 있음.
        - 웹 버전의 Visual Studio Code나 PyCharm과 비슷함
        

---

## 왜 JavaScript를 배워야 하는가?

1. 프론트엔드의 절대적인 표준
    - 별도의 플러그인 설치 없이 모든 사용자에게 동일한 동적 기능을 제공

1. 디양한 분야에서 활용 가능 (다음 단락 참고)
    - 백엔드, 3D, 앱 개발(모바일/데스크톱), 실시간 채팅, 머신러닝 등 다양한 분야에서 사용됨

---

## JavaScript의 활용

### 1. [Three.js](https://threejs.org/)

- 웹 브라우저에서 3D 그래픽을 쉽게 만들고 표시할 수 있도록 도와주는 JavaScript 라이브러리
- 활용 - 웹 기반 3D 시각화, 3D 웹 게임, 온라인 3D 에디터
- 개발 사례 - Google Maps Street View WebGL, Sketchfab (3D 모델 뷰어 및 공유 플랫폼)

### 2. [React Native](https://reactnative.dev/)

- JavaScript와 React를 사용하여 iOS와 Android 모바일 앱을 동시에 개발할 수 있게 해주는 프레임워크
- 활용 - 일반적인 모바일 앱 개발, 빠른 프로토타입 개발, 기존 네이티브 앱에 특정 기능을 통합
- 개발 사례 - Facebook, Instagram, Airbnb, Skype, Uber Eats (일부 기능)

### 3. [Electron](https://www.electronjs.org/)

- HTML, CSS, JavaScript로 데스크톱 애플리케이션을 구축할 수 있게 해주는 프레임워크
- 활용 - 크로스 플랫폼 데스크톱 앱 개발 (Windows, macOS, Linux)
- 개발 사례 - Visual Studio Code, Slack, Discord, Atom, Trello, Evernote

### 4. [Node.js](https://nodejs.org/ko)

- Chrome V8 JavaScript 엔진을 기반으로 구축된 서버 측 JavaScript 런타임 환경
- 활용 - 웹 서버, API 서버, 실시간 애플리케이션 (채팅, 게임), 명령줄 도구
- 개발 사례 - Netflix (일부 백엔드), LinkedIn (일부 백엔드), PayPal (일부 백엔드), Uber (일부 백엔드)
- 관련 강의 - [https://nomadcoders.co/wetube](https://nomadcoders.co/wetube)

### 5. [Socket.IO](https://socket.io/)

- 웹 브라우저와 서버 간의 실시간 양방향 이벤트 기반 통신을 가능하게 하는 JavaScript 라이브러리
- 활용 - 실시간 채팅, 온라인 게임(실시간 액션 동기화), 라이브 스트리밍, 협업도구, 알림 시스템
- 개발 사례 - Slack, Discord, Google Docs

### 6. [ml5.js](https://ml5js.org/)

- 웹 브라우저에서 접근 가능한 사용자 친화적인 머신러닝 라이브러리 (TensorFlow.js 기반)
- 활용 - 이미지 분류, 객체 감지, 포즈 추정, 스타일 전이(이미지 스타일 적용), 악기 인식, 음성 인식 및 합성
- 개발 사례 - MIT Media Lab
