export const metadata = {
  title: '星梦求职 - 帮助你找到理想的程序员工作',
  description: '星梦求职 - 帮助你找到理想的北美程序员工作',
}

import Hero from '@/components/hero'
import Services from '@/components/services'
import ProductSection from '@/components/product-section'
import Teachers from '@/components/teachers'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <Services />
      <Teachers />
    </>
  )
}
