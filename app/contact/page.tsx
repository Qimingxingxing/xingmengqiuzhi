import Image from "next/image";

export const metadata = {
    title: 'Contact Us',
    description: 'Page description',
}

import QRCode from "@/public/images/qr-code.jpg";

export default function Contact() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-20 md:pb-20 items-center">
                    <Image className="mx-auto" src={QRCode} height={500} width={400}
                           alt="Testimonial 01"/>
                </div>
            </div>
        </section>
    )
}
