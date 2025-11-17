import { prisma } from '@/lib/prisma'

export default async function Home() {
    const categories = await prisma.category.findMany()

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">TechVision Inc.</h1>
            <p className="mt-4">Categories: {categories.length}</p>
            <ul className="mt-4">
                {categories.map((cat) => (
                    <li key={cat.id}>{cat.name}</li>
                ))}
            </ul>
        </main>
    )
}
