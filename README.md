# node_dbCRUD_RE

이 프로젝트는 Node.js와 Express를 사용하여 CRUD (Create, Read, Update, Delete) 서비스를 가능하게 하는 서버를 구축한 프로젝트입니다. 프론트엔드 부분은 없으며, 서버 측에서 데이터를 관리하고 보여줍니다.

## 프로젝트 구조

프로젝트는 다음과 같은 주요 구성 요소로 구성되어 있습니다:

- `app.js`: 서버 애플리케이션의 진입점입니다.
- `routes/`: 서버 라우팅을 정의한 디렉토리입니다.
- `models/`: MongoDB 데이터 모델을 정의한 디렉토리입니다.
- `controllers/`: 라우트 핸들러 및 비즈니스 로직을 정의한 디렉토리입니다.
- `config/`: 프로젝트 설정 파일을 저장한 디렉토리입니다.

## 설치 및 실행



## 주요 도구

Node.js: Node.js
Express.js: Express.js
Mongoose: Mongoose
Prettier: Prettier
Thunder Client: Thunder Client


## api

이 프로젝트는 다음과 같은 CRUD 기능을 제공합니다:

GET /api/items: 모든 항목 조회
GET /api/items/:id: 특정 항목 조회
POST /api/items: 새 항목 추가
PUT /api/items/:id: 특정 항목 수정
DELETE /api/items/:id: 특정 항목 삭제
