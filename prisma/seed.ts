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
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })