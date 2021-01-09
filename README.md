# Baby's NestJS

처음만나보는 NestJS API 만들기

---

## Start NestJS

```(terminal)
npm i -g @nestjs/cli
```

```
nest new nest-app
```

## Architecture

1. main
   > NestJS의 root file for working (DON'T CHANGE FILE NAME!).
2. Controller
   > 기본적으로 url을 가져오고 함수를 실행하는 역할 (express의 router 역할)
3. Services
   > 비지니스 로직을 수행하는 역할 (controller는 url을 맵핑하는 역할만)
