export const metadata = {
  title: '星梦求职 - 帮助你找到理想的程序员工作',
  description: '星梦求职 - 帮助你找到理想的北美程序员工作',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
