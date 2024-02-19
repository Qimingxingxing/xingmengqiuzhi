import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import Contact from "@/app/contact/page";

export default function Header() {
    return (
        <header className="fixed w-full z-30 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        <Image alt="" className="w-20 h-20 fill-current" src={Logo} aria-label="Cruip"/>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-start flex-wrap items-center">
                            <li>
                                <Link
                                    href="/"
                                    className="font-medium text-gray-600 hover:text-gray-400 px-4 py-3 transition duration-150 ease-in-out"
                                >
                                    首页
                                </Link>
                                <Link
                                    href="#product-section"
                                    className="font-medium text-gray-600 hover:text-gray-400 px-4 py-3 transition duration-150 ease-in-out"
                                >
                                    课程
                                </Link>
                                <Link
                                    href="#services"
                                    className="font-medium text-gray-600 hover:text-gray-400 px-4 py-3 transition duration-150 ease-in-out"
                                >
                                    团队
                                </Link>
                                <Link
                                    href="/"
                                    className="font-medium text-gray-600 hover:text-gray-400 px-4 py-3 transition duration-150 ease-in-out"
                                >
                                    常见问题
                                </Link>
                                <Link
                                    href="/contact"
                                    className="font-medium text-gray-600 hover:text-gray-400 px-4 py-3 transition duration-150 ease-in-out"
                                >
                                    联系我们
                                </Link>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </nav>

                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}
