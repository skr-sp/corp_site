import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'お問い合わせありがとうございます | TechVision Inc.',
}

export default function ContactThanksPage() {
    return (
        <section className="py-16">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    {/* チェックマークアイコン */}
                    <div className="mb-6 flex justify-center">
                        <div className="rounded-full bg-green-100 p-4">
                            <svg
                                className="h-16 w-16 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        送信完了
                    </h1>
                    <p className="mb-8 text-gray-600">
                        お問い合わせいただきありがとうございます。
                        <br />
                        内容を確認の上、担当者よりご連絡させていただきます。
                    </p>

                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                    >
                        トップページに戻る
                    </Link>
                </div>
            </Container>
        </section>
    )
}
