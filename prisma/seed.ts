import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // カテゴリ作成
    const techCategory = await prisma.category.upsert({
        where: { slug: 'technology' },
        update: {},
        create: {
            name: '技術',
            slug: 'technology',
        },
    })

    const businessCategory = await prisma.category.upsert({
        where: { slug: 'business' },
        update: {},
        create: {
            name: 'ビジネス',
            slug: 'business',
        },
    })

    console.log('✅ カテゴリ作成完了')
    console.log({ techCategory, businessCategory })

    // テスト用ユーザー作成
    const testUser = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            name: 'テスト太郎',
            role: 'ADMIN',
        },
    })

    console.log('✅ テストユーザー作成完了')
    console.log({ testUser })

    // テスト記事作成
    const post1 = await prisma.post.upsert({
        where: { slug: 'welcome-to-techvision' },
        update: {},
        create: {
            title: 'TechVisionブログへようこそ',
            slug: 'welcome-to-techvision',
            content: `# TechVisionブログへようこそ

このブログでは、最新の技術トレンドやビジネスの知見を共有していきます。

## 私たちについて

TechVision Inc.は、最先端のテクノロジーを活用してビジネスの成長を支援する企業です。

## これから発信していくこと

- 最新技術の解説
- 開発のベストプラクティス
- DX推進の事例紹介

今後とも、どうぞよろしくお願いいたします。`,
            excerpt: 'TechVisionブログの開設をお知らせします。',
            published: true,
            publishedAt: new Date(),
            authorId: testUser.id,
            categoryId: businessCategory.id,
        },
    })

    const post2 = await prisma.post.upsert({
        where: { slug: 'introduction-to-nextjs-14' },
        update: {},
        create: {
            title: 'Next.js 14の新機能を徹底解説',
            slug: 'introduction-to-nextjs-14',
            content: `# Next.js 14の新機能

Next.js 14では、多くの新機能と改善が追加されました。

## Server Actions

フォーム送信がより簡単になりました。

\`\`\`typescript
async function createPost(formData: FormData) {
  'use server'
  // サーバー側で実行される
}
\`\`\`

## Partial Prerendering

静的と動的のハイブリッドレンダリングが可能になりました。

## まとめ

Next.js 14は、開発者体験を大きく向上させる素晴らしいアップデートです。`,
            excerpt: 'Next.js 14の新機能と改善点をわかりやすく解説します。',
            published: true,
            publishedAt: new Date(),
            authorId: testUser.id,
            categoryId: techCategory.id,
        },
    })

    console.log('✅ テスト記事作成完了')
    console.log({ post1, post2 })

    // 採用情報作成
    const job1 = await prisma.job.create({
        data: {
            title: 'フロントエンドエンジニア',
            department: '開発部',
            location: '東京本社（リモート可）',
            type: 'FULL_TIME',
            description: `モダンなWebアプリケーションのフロントエンド開発をお任せします。

【具体的な業務内容】
- React/Next.jsを使用したWebアプリケーション開発
- UIコンポーネントの設計・実装
- API連携の実装
- パフォーマンス最適化
- コードレビュー`,
            qualifications: `【必須スキル】
- React/Next.jsでの開発経験（2年以上）
- TypeScriptの実務経験
- Git/GitHubを使ったチーム開発経験

【歓迎スキル】
- モバイルアプリ開発経験
- デザインシステムの構築経験
- パフォーマンスチューニング経験`,
            benefits: `【給与】
年収 500万円〜900万円（経験・スキルに応じて決定）

【勤務時間】
フレックスタイム制（コアタイム: 11:00-15:00）

【休日・休暇】
完全週休2日制（土日祝）、年次有給休暇、夏季休暇、年末年始休暇

【福利厚生】
社会保険完備、交通費全額支給、リモートワーク可、書籍購入補助、資格取得支援`,
            published: true,
        },
    })

    const job2 = await prisma.job.create({
        data: {
            title: 'バックエンドエンジニア',
            department: '開発部',
            location: '東京本社（リモート可）',
            type: 'FULL_TIME',
            description: `スケーラブルなバックエンドシステムの設計・開発をお任せします。

【具体的な業務内容】
- RESTful API/GraphQL APIの設計・実装
- データベース設計・最適化
- マイクロサービスアーキテクチャの構築
- AWS等のクラウドインフラ構築
- パフォーマンスチューニング`,
            qualifications: `【必須スキル】
- Node.js/Go/Pythonいずれかでの開発経験（3年以上）
- RDB（MySQL/PostgreSQL）の実務経験
- RESTful APIの設計・実装経験
- Git/GitHubを使ったチーム開発経験

【歓迎スキル】
- AWS/GCP等のクラウド経験
- Dockerを使った開発経験
- マイクロサービス開発経験
- CI/CD構築経験`,
            benefits: `【給与】
年収 600万円〜1000万円（経験・スキルに応じて決定）

【勤務時間】
フレックスタイム制（コアタイム: 11:00-15:00）

【休日・休暇】
完全週休2日制（土日祝）、年次有給休暇、夏季休暇、年末年始休暇

【福利厚生】
社会保険完備、交通費全額支給、リモートワーク可、書籍購入補助、資格取得支援、カンファレンス参加支援`,
            published: true,
        },
    })

    console.log('Jobs created:', { job1, job2 })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })