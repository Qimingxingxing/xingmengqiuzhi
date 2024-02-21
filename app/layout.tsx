import './css/style.css'

import {Inter, Architects_Daughter} from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap'
})

export const metadata = {
    title: '星梦求职 - 帮助你找到理想的程序员工作',
    description: '星梦求职 - 帮助你找到理想的北美程序员工作',
    keywords: "星梦求职, mock interview, 华人CS求职, Computer science, tech, 模拟面试, 大厂, 北美求职, 就业, mock coding interview, mock system design interview, mock behavior interview, mock project deep dive interview, resume revision, 简历修改, 算法模拟面试, 系统设计模拟面试, 行为问题模拟面试, 项目深入探讨模拟面试"
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <meta charSet="UTF-8" />
            <meta name="description" content="星梦求职 - 帮助你找到理想的北美程序员工作 通过模拟mock面试来帮你北美找到理想的互联网工作"/>
            <meta name="keywords" content="星梦求职, mock interview, 华人CS求职, Computer science, tech, 模拟面试, 大厂, 北美求职, 就业, mock coding interview, mock system design interview, mock behavior interview, mock project deep dive interview, resume revision, 简历修改, 算法模拟面试, 系统设计模拟面试, 行为问题模拟面试, 项目深入探讨模拟面试"/>
        </head>
        <body
            className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased shadow-white text-black tracking-tight scroll-smooth`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header/>
            {children}
        </div>
        </body>
        </html>
)
}
 