import DeepDive from '@/public/images/deep-dive.jpg'

export default function Hero() {
    return (
        <section className="bg-tech-background">
            <div className="mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-32 pb-8 md:pt-40 md:pb-4">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-24">
                        <h1 className="h1 text-white text-8xl mt-20 mb-20" data-aos="fade-up">星梦求职</h1>
                        <h3 className="h3 text-white mb-6" data-aos="fade-up" data-aos-delay="200">专注帮助北美CS华人求职者拿到dream
                            offer</h3>
                        <h3 className="h3 text-white mb-16" data-aos="fade-up" data-aos-delay="200">陪伴你度过北美tech行业就业寒冬</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
