import Image from 'next/image'

import Teacher1 from '@/public/images/teacher1.png'
import Teacher2 from '@/public/images/teacher2.png'
import Teacher3 from '@/public/images/teacher3.png'

export default function Teachers() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl pb-12 md:pb-16" data-aos="fade-up" data-aos-delay="200">
                        <div
                            className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach
                            goals that matter
                        </div>
                        <h1 className="h2 mb-4">师资介绍</h1>
                        <p className="text-xl text-gray-400">讲师均来自FANNG等北美著名公司</p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        {/* 1st testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher1} width={48} height={48}
                                           alt="teacher 01"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">
                                FAANG大厂SDE，现任Tech Lead。资深面试官，面试人数300+。曾斩获Google, Meta, Amazon, Tiktok offer。精通算法指导，求职规划，面试技巧，简历修改。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">Kevin</cite>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher2} width={48} height={48}
                                           alt="Testimonial 02"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">— Open PRO lets me quickly get the
                                insights I care about so that I can focus on my productive work. I've had Open PRO for
                                about 24 hours now and I honestly don't know how I functioned without it before.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">Dan</cite>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up" data-aos-delay="400">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher3} width={48} height={48}
                                           alt="Testimonial 03"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">— Open PRO lets me quickly get the
                                insights I care about so that I can focus on my productive work. I've had Open PRO for
                                about 24 hours now and I honestly don't know how I functioned without it before.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">James</cite>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
