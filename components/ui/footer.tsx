import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        {/* 1st block */}
                        <div className="md:col-span-6 lg:col-span-6">
                            <Image alt="" className="w-10 h-10 fill-current" src={Logo} aria-label="Cruip"/>
                            <br/>
                            <div className="text-gray-400">
                                星梦求职是一家成立于中国的求职辅导机构，是专注于北美面试辅导的公司，我们提供最专业的面试mock服务。
                            </div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-6 lg:col-span-6 grid sm:grid-cols-3 gap-16">

                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">产品</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="#algorithm"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">模拟算法</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="#systemdesign"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">系统设计</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="#behaviorquestion"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">行为问题</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="#deepdive"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">项目深入</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="#resumerevision"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">简历修改</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">关于合作</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">商务合作: xingmengqiuzhi@gmail.com</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/contact"
                                              className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">微信号</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="md:flex md:justify-center">
                        <div className="text-gray-400 text-sm">&copy; xingmengqiuzhi.com. All rights reserved.</div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
