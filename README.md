# ex-map
### 프로젝트 실행 방법

```
/> npm i
```
먼저 루트 경로에서 위 명령어로 실행에 필요한 패키지들을 설치해주세요. 설치가 끝나면 node_modules 폴더가 생길 것.

```
/> npm run start // client, server 동시에 실행
/> npm run client // client 만 실행
/> npm run server // server 만 실행
```

![image](https://user-images.githubusercontent.com/50830078/191894286-e9f133db-2fc3-42b0-be3f-34c666fdeff7.png)
<br /> 오류가 생기지 않는다면 터미널에 이런 식으로 뜰 겁니다.

### 실행되지 않을 때
client 랑 server 폴더에 각각 node_modules 있는지 확인하고 없으면

```
/client> npm i
/server> npm i
```
client, server 경로에서 위 명령어를 실행해 주세요. <br />
그리고 다시 루트로 돌아와서 실행해 보세요. <br />
<br />
그래도 안 되면 server 폴더 안에 .env 파일 있는지 확인해 보시고 없으면 저한테 말해주세요!! <br />
그 외에 다른 문제도 단톡이나 디코에 올려주시면 보는대로 답하겠습니다.
