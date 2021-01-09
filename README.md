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
