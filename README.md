# Coral Creative

[coral-creative.com](https://coral-creative.com) のソースコードです。

iOSアプリ開発・AI活用・Webサービス開発を手がける個人開発スタジオ「Coral Creative」のコーポレートサイト。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router) + TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **デプロイ**: GitHub Pages (静的エクスポート)
- **フォント**: Geist (by Vercel)

## ページ構成

| パス | 内容 |
|---|---|
| `/` | TOP — ヒーロー・機能・About teaser・CTA |
| `/about/` | About — プロフィール・スキル・ビジョン |
| `/products/` | Products — 開発中プロダクト一覧 |
| `/contact/` | Contact — お問い合わせフォーム |

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

## ビルド・静的エクスポート

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが生成されます。

---

## GitHub Pages へのデプロイ手順

### 1. リポジトリの作成とプッシュ

GitHub 上にリポジトリを作成し、ローカルをプッシュします。

```bash
git remote add origin https://github.com/<username>/coral-creative-site.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages を有効にする

1. リポジトリの **Settings** → **Pages** を開く
2. **Source** を `GitHub Actions` に設定する

### 3. 自動デプロイ（GitHub Actions）

`main` または `develop` ブランチへプッシュすると、`.github/workflows/deploy.yml` が自動実行されます。

```
push → npm run build → Deploy to GitHub Pages
```

デプロイ完了後、リポジトリの **Actions** タブで状況を確認できます。

### 4. カスタムドメインの設定

`public/CNAME` に `coral-creative.com` が記載されているため、GitHub Pages のカスタムドメインは自動で設定されます。

DNS プロバイダ側で以下のレコードを追加してください。

**Apex ドメイン (`coral-creative.com`) の Aレコード:**

```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

**IPv6 (AAAA) レコード:**

```
AAAA  @  2606:50c0:8000::153
AAAA  @  2606:50c0:8001::153
AAAA  @  2606:50c0:8002::153
AAAA  @  2606:50c0:8003::153
```

**www サブドメイン:**

```
CNAME  www  <username>.github.io
```

DNS 反映後、GitHub Pages の Settings → Pages で **Enforce HTTPS** を有効にしてください。

### 5. 手動デプロイ（ローカルから）

```bash
npm run build
npx gh-pages -d out
```

---

## 画像・アセットの追加

| ファイル | 仕様 | 用途 |
|---|---|---|
| `public/og-image.png` | 1200×630px | OGP・SNS シェア画像 |
| `public/apple-touch-icon.png` | 180×180px | iOS ホーム画面アイコン |

## 問い合わせ

contact@coral-creative.com
