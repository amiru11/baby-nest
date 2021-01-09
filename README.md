# Baby's NestJS

처음만나보는 NestJS API 만들기

---

## Start NestJS

```terminal
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

## Generate with CLI

Generate a Nest element.

> Generate 하면서 필요한 import를 모두 실행시켜줘서 매우 편함.
> 기본적으로 test code 파일도 함께 생성한다.

```
generate|g [options] <schematic> [name] [path]
```

## Controller Decorator

1. @Get
2. @Post
3. @Put
4. @Patch
5. @Delete
6. @Param
7. @Body

## Service

> Single Responsibility Principle(SRP)
> 하나의 module, class, function은 하나의 기능을 꼭 책임진다.

## Validation

```javascript
// main.ts
// Create Validation Pipe like middleware
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true, //  데코레이터가 없는 속성은 제거해서 저장
    forbidNonWhitelisted: true, // forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것
    transform: true, // 우리가 원하는 실제 타입으로 변환시켜줌
  }),
);
```

## ETC

- NestJS는 Express 위에서 돌아갑니다.
- 하지만 Express, Fastify 두가지 프레임워크를 모두 지원하기에 Only NestJS에 맞게 작성하는 게 좋습니다.
