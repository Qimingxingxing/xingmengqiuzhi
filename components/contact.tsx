import Image from "next/image";

import QRCode from "@/public/images/qr-code.jpg";
import Footer from "@/components/ui/footer";

export default function Contact() {
    return (
        <>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-20 md:pb-20 items-center">
                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 mt-20 md:pb-10">
                            <h3 className="h3">请扫描以下二维码以添加我们的微信</h3>
                        </div>

                        <Image className="mx-auto" src={QRCode} height={500} width={400}
                               alt="Testimonial 01"/>

                        <div className="max-w-3xl mx-auto text-center pb-12 mt-10 md:pb-10">
                            <h4 className="h4"> 报名付费前请添加小助理微信来确认需求</h4>
                            <br/>
                            <h4 className="h4">我们的邮箱为：xingmengqiuzhi@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
