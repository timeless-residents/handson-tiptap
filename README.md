# Next.js + Tiptap Editor Example

このプロジェクトは[Next.js](https://nextjs.org)と[Tiptap](https://tiptap.dev/)を使用したリッチテキストエディタの実装例です。

## 機能

- リッチテキストエディタの基本機能
  - 太字
  - 斜体
  - 取消線
  - 見出し
  - 箇条書きリスト
  - 番号付きリスト

## 技術スタック

- [Next.js](https://nextjs.org/) 14
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tiptap](https://tiptap.dev/)

## セットアップ

まず、必要なパッケージをインストールします：

```bash
npm install
# または
yarn
# または
pnpm install
```

次に、開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```

[http://localhost:3000](http://localhost:3000)をブラウザで開いて動作を確認できます。

## プロジェクト構造

```
.
├── app/
│   ├── page.tsx              # メインページ
│   └── globals.css           # グローバルスタイル
├── components/
│   └── TiptapEditor.tsx      # Tiptapエディターコンポーネント
└── ...
```

## 使用方法

エディタは以下のショートカットキーをサポートしています：

- `Ctrl + B` : 太字
- `Ctrl + I` : 斜体
- `Ctrl + Shift + X` : 取消線
- `Ctrl + Alt + 1` : 見出し1

また、ツールバーのボタンからも各機能を利用できます。

## カスタマイズ

エディタの機能を拡張するには、以下のような追加パッケージをインストールします：

```bash
npm install @tiptap/extension-table @tiptap/extension-image
# など
```

## ライセンス

このプロジェクトは[MIT](LICENSE)ライセンスの下で公開されています。

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tiptap Documentation](https://tiptap.dev/docs/editor/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
