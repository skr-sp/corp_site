import { Container } from '@/components/layout/Container'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'お問い合わせ | TechVision Inc.',
    description: 'TechVision Inc.へのお問い合わせはこちらから。',
}

export default function ContactPage() {
    async function submitContact(formData: FormData) {
        'use server'

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const company = formData.get('company') as string
        const message = formData.get('message') as string

        await prisma.contact.create({
            data: {
                name,
                email,
                company: company || null,
                message,
                status: 'NEW',
            },
        })

        redirect('/contact/thanks')
    }

    return (
        <>
            {/* Page Header */}
            <section className="bg-gray-50 py-16">
                <Container>
                    <h1 className="text-4xl font-bold text-gray-900">
                        お問い合わせ
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">Contact</p>
                </Container>
            </section>

            {/* Contact Form */}
            <section className="py-16">
                <Container>
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-8">
                            <p className="text-gray-600">
                                サービスに関するご質問やご相談など、お気軽にお問い合わせください。
                            </p>
                        </div>

                        <form action={submitContact} className="space-y-6">
                            {/* お名前 */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    お名前
                                    <span className="ml-1 text-red-600">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>

                            {/* メールアドレス */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    メールアドレス
                                    <span className="ml-1 text-red-600">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>

                            {/* 会社名 */}
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    会社名（任意）
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>

                            {/* お問い合わせ内容 */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    お問い合わせ内容
                                    <span className="ml-1 text-red-600">
                                        *
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={8}
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>

                            {/* 送信ボタン */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}
