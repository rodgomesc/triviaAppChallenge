## steps to run the application


```shell
# goto project folder
cd triviaAppChallenge

# install the dependencies
yarn install

# start the android application
yarn android

# or start the ios application (if you are on mac)
yarn ios


### Added unit tests for screen components

```

> ### note: all unit tests and mocks are in the `__test__` folder
>
> ![image](https://user-images.githubusercontent.com/4893591/157312060-1e74db41-f42e-4c2a-a416-f877dfaa29fa.png)

## Organization and structure of folders

```shell
.src
├── @types
│   └── navigation.d.ts
├── __tests__
│   ├── components
│   │   ├── body.test.tsx
│   │   ├── button.test.tsx
│   │   ├── heading.test.tsx
│   │   └── screenContainer.test.tsx
│   ├── mocks
│   │   ├── mockedQuestions.ts
│   │   ├── mockedQuizContext.tsx
│   │   └── mockedScore.ts
│   ├── pages
│   │   ├── home.test.tsx
│   │   ├── quiz.test.tsx
│   │   └── result.test.tsx
│   ├── testUtils.tsx
│   └── utils
│       └── index.test.ts
├── components
│   ├── Body.tsx
│   ├── Button.tsx
│   ├── Heading.tsx
│   ├── ScreenContainer.tsx
│   └── index.ts
├── hooks
│   └── useQuiz.tsx
├── pages
│   ├── Home.tsx
│   ├── Quiz.tsx
│   └── Result.tsx
├── routes
│   └── root.routes.tsx
└── utils
    └── index.ts
```

## Feedbacks

+55 64 98414-7972 or rodgomesc@gmail.com
