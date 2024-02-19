import Image from 'next/image'

import SystemDesign from '@/public/images/system-design.jpg'
import Coding from '@/public/images/coding.jpg'
import Behavior from '@/public/images/behavior.jpg'
import Resume from '@/public/images/resume.jpg'
import DeepDive from '@/public/images/deep-dive.jpg'

export default function ProductSection() {
    return (
        <section id="product-section">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl pb-12 md:pb-16" data-aos="fade-up">
                        <div
                            className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach
                            goals that matter
                        </div>
                        <h1 className="h2 mb-4">我们的产品服务</h1>
                        <p className="text-xl text-gray-600">我们致力于提供最好的面试mock服务,来帮助你拿到理想的offer</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="h-auto" src={Coding} width={600} height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Seek the
                                        Best
                                    </div>
                                    <h3 className="h3 mb-3">算法模拟面试：Mock Coding Interview</h3>
                                    <p className="text-xl text-gray-600 mb-4">1轮算法模拟面试（一小时、1对1）+
                                        30分钟面试反馈</p>
                                    <ul className="text-lg text-gray-600 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试官均来自大厂senior级别以上</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>会尽量match target公司的面试官,带给你最真实的体验</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>详细feedback会写在google doc里, 包括具体rating和面试可用于debrief的反馈</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>使用coderpad做题</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto fill-current"
                                       src={SystemDesign} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Best quality.
                                        Less spend
                                    </div>
                                    <h3 className="h3 mb-3">后端系统设计模拟面试：Mock System Design Interview</h3>
                                    <p className="text-xl text-gray-600 mb-4">
                                        1轮系统设计模拟面试（一小时、1对1）+ 30分钟面试反馈
                                    </p>
                                    <ul className="text-lg text-gray-600 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试官均来自大厂senior级别以上</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>主要讨论后端系统设计,使用最常见的题目带你真实体验系统设计面试</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>详细feedback会写在google doc里, 包括具体rating和面试可用于debrief的反馈</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>使用excalidraw面试</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Behavior} width={540}
                                       height={405} alt="Features 03"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        Good Story Matters
                                    </div>
                                    <h3 className="h3 mb-3">行为问题面试：Mock Behavior Question Interview</h3>
                                    <p className="text-xl text-gray-600 mb-4">1轮行为问题面试（45分钟,1对1）+
                                        15分钟面试反馈
                                        aliqua.</p>
                                    <ul className="text-lg text-gray-600 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试官为大厂lead职位或者hiring manager,bar raiser</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试将会采用和大厂面试同样的提问方法,也会对具体的面试需求更改</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>详细feedback会写在google doc里, 包括具体rating和面试可用于debrief的反馈</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 4th item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DeepDive} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        Dive Deep on What You Did
                                    </div>
                                    <h3 className="h3 mb-3">项目深入探讨面试：Project Deep Dive Interview</h3>
                                    <p className="text-xl text-gray-600 mb-4">1轮项目深入面试（45分钟、1对1）+
                                        15分钟面试反馈
                                        aliqua.</p>
                                    <ul className="text-lg text-gray-600 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试官为大厂lead职位或者hiring manager,bar raiser</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>面试将会采用和大厂面试同样的提问方法,也会对具体的面试需求更改</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>详细feedback会写在google doc里, 包括具体rating和面试可用于debrief的反馈</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5th item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Resume} width={540}
                                       height={405} alt="Features 03"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        Getting Interview is a Start Point
                                    </div>
                                    <h3 className="h3 mb-3">简历修改：Resume Revision</h3>
                                    <p className="text-xl text-gray-600 mb-4">1小时一对一简历修改服务</p>
                                    <ul className="text-lg text-gray-600 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>多年大厂经验的工程师帮你修改简历</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>一对一,google docs实时进行修改</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>帮助你了解面试官会如何提问你的简历</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>帮助你包装你的简历,并对你的经历进行包装</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
