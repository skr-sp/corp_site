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
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
