jenkins 설정에 애를 먹었다
안해보던 것이라 pipeline설정부터
매우 혼란

우선 구축한 환경은
우분투 서버에 nginx로 기본 라우팅을 하도록 했다
우분투 서버에 jenkins를 설치해서 webhook설정으로 github repository 연결을 했다

처음에는 docker에 jenkins container를 띄워 webhook설정까지 마쳤었다
build하는 과정에서 착오였을지 모르지만 jenkins home에서 /var/www로 빌드과정을 옮기는데 경로를 못잡는 문제가 있었다.
하지만 이건 vite의 경우 빌드 결과물이 webpack의 /build와 달리 /dist인 문제를
/var/www 경로를 못찾는 것으로 착각했을 수 있다.
이 문제로 인해 jenkins를 ubuntu에 직접 설치했다.

docker를 활용하는 방안에 대해서는 조금 더 고민해보고자 한다.
일단 중요한건 react ui library를 설치하는 것이었고.

다음 스텝은 스토리북 추가해서 스토리북까지 띄우는것이다.
하지만 스토리북으로 진행할지, md viewer 세팅하여 직접 매뉴얼을 만들지는 고민해볼 필요가 있겠다.