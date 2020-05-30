# Hexagram

Telegram client

[Play now in your browser (instead of playing your free GTA V copy)](https://hexalang.github.io/hexagram/)

> It is not best but it's just fine

[Visit our Telegram group to discuss Hexagram!](https://t.me/joinchat/JFOrZFNUdU9V2AMksky8pA)

![GUI](screenshots/login.jpg?raw=true)


![GUI](screenshots/gui.jpg?raw=true)


## How to build

To test in browser with localhost (recommended way!):

```sh
cd hexagram-react
yarn install --frozen-lockfile
yarn start
```

To release:

```sh
cd hexagram-react
yarn install --frozen-lockfile
yarn build
copy ./build folder to /docs in repo root
node fix-scss-root.js
```
