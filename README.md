# 오늘 뭐입지?

날씨와 온도에 맞춰 오늘 입어야 하는 의상을 추천해준다

### Front spec.

react, TypeScript, Styled component, CRA

### back spec.

nodeJS, Express, sequelize

### DB spec.

MySQL

## 주요기능

-   출격 가능한 의상 목록을 dataBase에 저장한 뒤, 날씨에 가장 맞는 순서대로 나열한다.
-   남/녀 구분에 따른 차이가 있다.(스위치)
-   게시판 기능을 제공한다.
-   제목과 사진을 올릴 수 있는 페이지를 제공
-   게시판 검색기능과 정렬기능을 제공한다
-   게시판의 기본값은 최신순으로 한다
-   반응형 웹으로 구현하고 추후 앱으로 제공한다

### 개발

-   회원가입, 로그인, 게시판 작업 추가(디자인 시안)

#### Front

-   화면 디자인 시안 작업 - 완료
-   CRA 환경설정
-   styled component css작업

#### Server

-   날씨/온도 정보로 DB에서 의상데이터를 가져올 수 있는 API생성 - 작업중
-   회원가입, 로그인 API 작업
-   게시판 CRUD API 작업

#### DB

-   카테고리별 옷 목록 테이블 설계 - 완료
-   DB테이블 및 스키마 자동화
    => npx sequelize-cli db:create // 스키마 생성
    => npx sequelize-cli db:migrate // 테이블 생성
    => npx sequelize-cli db:seed:all // 더미데이터 마이그레이션
