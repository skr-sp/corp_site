import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const { pathname } = request.nextUrl

    // /admin配下のパスを保護
    if (pathname.startsWith('/admin')) {
        // 未認証の場合、ログインページにリダイレクト
        if (!token) {
            const url = new URL('/api/auth/signin', request.url)
            // encodeURIComponent を削除（NextAuthが自動でエンコードする）
            url.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(url)
        }

        // 認証済みの場合、そのまま通過
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
