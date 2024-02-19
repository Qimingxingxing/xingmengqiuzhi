import Image from 'next/image'

import Teacher1 from '@/public/images/teacher1.png'
import Teacher2 from '@/public/images/teacher2.png'
import Teacher3 from '@/public/images/teacher3.png'
import Teacher4 from '@/public/images/teacher4.png'
import Teacher5 from '@/public/images/teacher5.png'
import Teacher6 from '@/public/images/teacher6.png'

export default function Teachers() {
    return (
        <section id="teachers">
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

                    <div className="max-w-sm mx-auto grid gap-8 mb-10 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        {/* 1st testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher1} width={48} height={48}
                                           alt="teacher 01"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">
                                FAANG大厂SDE,现任Tech Lead。资深面试官,面试人数300+。曾斩获Google, Meta, Amazon, Tiktok offer。精通算法指导,求职规划,面试技巧,简历修改。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">温知新</cite>
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
                            <blockquote className="text-lg text-white grow">就职于果家多年,面试实战经历非常丰富,非常熟悉FLAG等众多大厂的面试。作为资深面试官,擅长算法,ood和BQ,总面试次数答100+。讲课生动形象,尤其是算法,深入浅出,易于理解。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">习得胜</cite>
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
                            <blockquote className="text-lg text-white grow">
                                就职于G家多年,高级工程师,拥有丰富的面试官和面试经验,面试人数超过100人,总面试次数超过200人,刷题量1000+。精通算法/面试/BQ指导和谈判技巧,耐心辅导多名求职者上岸。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">花无缺</cite>
                            </div>
                        </div>

                    </div>

                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        {/* 4th testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher4} width={48} height={48}
                                           alt="teacher 01"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">
                                资深Fintech/全栈工程师,美国名校毕业,现就职于顶尖金融公司,担任tech lead。拥有极为丰富的面试者与面试官经验,精通面试中的隐形技巧,拥有300+面试经验。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">云开来</cite>
                            </div>
                        </div>

                        {/* 5th testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher5} width={48} height={48}
                                           alt="Testimonial 02"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">
                                就职于A家多年,高级工程师,美国top学校毕业,拥有极其丰富的面试者和面试官经验面试技巧以及英语谈判交涉技巧,总面试次数200+。对讲算法题比较细致。
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">向凝眉</cite>
                            </div>
                        </div>

                        {/* 6th testimonial */}
                        <div className="flex flex-col h-full p-6 bg-gray-500" data-aos="fade-up" data-aos-delay="400">
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image className="rounded-full" src={Teacher6} width={48} height={48}
                                           alt="Testimonial 03"/>
                                </div>
                            </div>
                            <blockquote className="text-lg text-white grow">
                                北美知名院校计算机研究生,曾斩获google, uber, amazon等多家公司的offer, 现任资深FLAG工程师, 擅长算法和系统设计, 多年面试官经验.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">楚月影</cite>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
