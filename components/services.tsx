export default function Services() {
    return (
        <section id="services" className="scroll-smooth">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl pb-12 md:pb-16" data-aos="fade-up" data-aos-delay="200">
                        <div
                            className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach
                            goals that matter
                        </div>
                        <h1 className="h2 mb-4">我们的理念</h1>
                        <p className="text-xl text-gray-400">通过面试的关键在于理解面试官想要的答案,
                            这需要经过专业的训练</p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-20 md:grid-cols-2 lg:grid-cols-2 lg:gap-20 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks>

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-24 h-24 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-logo" width="64" height="64" rx="32"/>
                                <path className="stroke-current text-purple-100"
                                      d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                                      strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd"/>
                                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9"
                                      strokeLinecap="square" strokeWidth="2"/>
                            </svg>
                            <h4 className="h4 mb-2">模拟真实大厂面试</h4>
                            <p className="text-lg text-gray-400 text-center max-w-sm">所有的面试服务目的是模拟还原最真实的北美互联网公司面试,全英文面试,反馈环节为中文</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-24 h-24 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-logo" width="64" height="64" rx="32"/>
                                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none"
                                   fillRule="evenodd">
                                    <path className="stroke-current text-purple-100"
                                          d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"/>
                                    <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">大厂面试官1对1模拟</h4>
                            <p className="text-lg text-gray-400 text-center max-w-sm">我们所有的面试官都来自大厂或有过大厂的工作经历,有过丰富的担任面试官的经验</p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-24 h-24 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-logo" width="64" height="64" rx="32"/>
                                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none"
                                   fillRule="evenodd">
                                    <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5"
                                             ry="11"/>
                                    <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22"/>
                                    <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">使用最高频的面试问题</h4>
                            <p className="text-lg text-gray-400 text-center max-w-sm">我们将会选用最高频的面试问题来面试,也会根据学员即将面试的公司进行合适的调整</p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-24 h-24 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-logo" width="64" height="64" rx="32"/>
                                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                                    <path className="stroke-current text-purple-100"
                                          d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"/>
                                    <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">全面地分析面试的反馈</h4>
                            <p className="text-lg text-gray-400 text-center max-w-sm">反馈将会和在正是面试后写的feedback一样的模式,面试的feedback可用于之后的debrief</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
