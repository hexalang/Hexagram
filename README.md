# Hexagram

Telegram client

[Play now in your browser (instead of playing your free GTA V copy)](https://hexalang.github.io/hexagram/)

> It is not best but it's just fine

[Visit our Telegram group to discuss Hexagram!](https://t.me/joinchat/JFOrZFNUdU9V2AMksky8pA)

![GUI](screenshots/login.jpg?raw=true)


![GUI](screenshots/gui.jpg?raw=true)


## How to build

Set your [API keys](https://core.telegram.org/api/obtaining_api_id) in `hexagram-react\src\tdlib\tdlib.ts`

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

## License

*Hexagram is licensed under the GNU Lesser General Public License v3.0*

Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.
