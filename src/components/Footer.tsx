import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Container from "./ui/Container";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                    {/* ===== Left Section (40%) ===== */}
                    <div className="md:w-2/5">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo-trikaya-white.svg"
                                alt="Trikaya"
                                width={158}
                                height={49}
                            />
                        </div>

                        {/* Badges */}
                        <div className="flex gap-3 mb-4">
                            <Image src="/Iso1.png" alt="ISO Badge" width={53} height={53} />
                            <Image src="/Iso2.svg" alt="ISO Badge" width={53} height={53} />
                            <Image src="/Iso3.svg" alt="ISO Badge" width={53} height={53} />
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-400 leading-relaxed mb-4 max-w-[72%]">
                            Transform your career with cutting-edge skills in Blockchain, AI,
                            Data Science, and Cybersecurity.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-gray-400">
                            <Link
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-white transition-colors"
                            >
                                <Linkedin size={18} color="white" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-white transition-colors"
                            >
                                <Twitter size={18} color="white" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Github"
                                className="hover:text-white transition-colors"
                            >
                                <Github size={18} color="white" />
                            </Link>
                            <Link
                                href="#"
                                aria-label="Email"
                                className="hover:text-white transition-colors"
                            >
                                <Mail size={18} color="white" />
                            </Link>
                        </div>

                        <p className="text-base text-white mt-6 font-normal">
                            © {new Date().getFullYear()} Trikaya. All rights reserved.
                        </p>
                    </div>

                    {/* ===== Right Section (60%) ===== */}
                    <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Platform */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Learn
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Practice
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Arena
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Membership
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Jobs & Internship
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Community
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        For Business
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        Terms of Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
