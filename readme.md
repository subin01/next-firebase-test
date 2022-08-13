1. create 2 firebase apps

 ```
  sp-next-firebase
  sp-next-firebase-dev
  ```

2. add alias

 ```
    firebase use --add
    firebase use --add

    firebase use prod
    firebase init hosting:github

    firebase use dev
    firebase init hosting:github
```


3. Above should create 2 secrets @
  https://github.com/subin01/next-firebase-test/settings/secrets/actions

    ``
      FIREBASE_SERVICE_ACCOUNT_SP_NEXT_FIREBASE
      FIREBASE_SERVICE_ACCOUNT_SP_NEXT_FIREBASE_DEV
    ``