# ベースイメージ
FROM node:20-alpine AS base

# 依存関係インストール用
FROM base AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package.json package-lock.json* ./
RUN npm ci

# 開発環境用
FROM base AS dev
WORKDIR /app

# 依存関係をコピー
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 環境変数
ENV NODE_ENV=development
ENV PORT=3000

# ポート公開
EXPOSE 3000

# 開発サーバー起動（Prisma generateは起動時に実行）
CMD ["sh", "-c", "npx prisma generate && npm run dev"]