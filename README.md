# scss 모듈 사용
```
yarn add node-sass
```
# 디렉터리 구조 잡기 
|1depth|2depth|3depth|
|------|---|---|
|node_module|npm을 통해 설치된 패키지 매니저(Package manager)들이 모여 있는 디렉토리||
|public|html 파일들과 이미지 파일들이 모여 있는 걸 확인할 수 있습니다. 정적인 성격을 가진 폴더 빌드된 결과 파일||
|.git|깃 정보 저장 디렉터리||
|.gitignore|깃 예외 파일 설정||
|package.json|프로젝트 기본정보, 사용라이브러리 스크립트 정보등 저장||
|README.md|프로젝트에 대한 설명|
|src|components|각 페이지에서 사용할 컴포넌트를 모아서 사용|
||containers(pages)|각 페이지별로 정리된 디렉터리|
||styles|sccs 파일 등 스타일 파일을 모아놓은 디렉터리|

## tip
> vscode에서 react 익스텐션을 설치하고 rafcp 축약어로 컴포넌트 형식 쉽게 생성 가능