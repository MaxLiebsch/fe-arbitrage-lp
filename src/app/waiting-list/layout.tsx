// 'use client'

// import { usePathname, useRouter } from 'next/navigation'
// import { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
//   const router = useRouter()
//   const pathname = usePathname()
//   useEffect(() => {
//     if (!localStorage.getItem('ckid')) {
//       if (
//         pathname.includes('/waiting-list/confirmation') ||
//         pathname.includes('/waiting-list/success')
//       ) {
//         router.push('/')
//       }
//     }
//   }, [pathname, router])

  return <>{children}</>
}
