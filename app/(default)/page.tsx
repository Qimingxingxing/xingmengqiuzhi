export const metadata = {
    title: '星梦求职 - 帮助你找到理想的程序员工作',
    description: '星梦求职 - 帮助你找到理想的北美程序员工作',
    keywords: "星梦求职, mock interview, 华人CS求职, Computer science, tech, 模拟面试, 大厂, 北美求职, 就业, mock coding interview, mock system design interview, mock behavior interview, mock project deep dive interview, resume revision, 简历修改, 算法模拟面试, 系统设计模拟面试, 行为问题模拟面试, 项目深入探讨模拟面试"
}

import Hero from '@/components/hero'
import Services from '@/components/services'
import ProductSection from '@/components/product-section'
import Teachers from '@/components/teachers'

export default function Home() {
    return (
        <>
            <Hero/>
            <ProductSection/>
            <Services/>
            <Teachers/>
        </>
    )
}
