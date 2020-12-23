# Hexagram

Community-driven Telegram client

[Play now in your browser (instead of playing your free GTA V copy)](https://hexalang.github.io/hexagram/) :arrow_upper_right:

> It is not best but it's just fine

[Visit our Telegram group to discuss Hexagram!](https://t.me/joinchat/JFOrZFNUdU9V2AMksky8pA) :arrow_upper_right:

[Support development on Patreon!](https://www.patreon.com/PeyTy) :arrow_upper_right:

Also check [Greentea OS](https://github.com/GreenteaOS) :arrow_upper_right: and [Hexa](https://github.com/hexalang) :arrow_upper_right:

![GUI](screenshots/login.jpg?raw=true)


![GUI](screenshots/gui.jpg?raw=true)


## How to build

Set your [API keys](https://core.telegram.org/api/obtaining_api_id) in `hexagram-react\src\tdlib\tdlib.ts`

To test in browser with localhost (recommended way!):

```sh
node hexagram-react/td_api_gen.js
cd hexagram-react
yarn install --frozen-lockfile
yarn start
```

To release:

```sh
node hexagram-react/td_api_gen.js
cd hexagram-react
yarn install --frozen-lockfile
yarn build
copy ./build folder to /docs in repo root
node fix-scss-root.js
```

## License

*Hexagram is licensed under the GNU Lesser General Public License v3.0*

Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.
