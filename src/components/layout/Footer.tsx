import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import Container from "../ui/Container";
import { FaDiscord, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-gray-300">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* ===== Left Section (40%) ===== */}
          <div className="md:w-2/5">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/logo/logo-trikaya-white.svg"
                  alt="Trikaya"
                  width={158}
                  height={49}
                />
              </Link>
            </div>

            {/* Badges */}
            <div className="mb-4 flex gap-3">
              <Image src="/Iso1.png" alt="ISO Badge" width={53} height={53} />
              <Image src="/Iso2.svg" alt="ISO Badge" width={53} height={53} />
              <Image src="/Iso3.svg" alt="ISO Badge" width={53} height={53} />
            </div>

            {/* Description */}
            <p className="mb-4 max-w-[72%] text-base leading-relaxed text-gray-400">
              Transform your career with cutting-edge skills in Blockchain, AI,
              Data Science, and Cybersecurity.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              <Link
                href="https://www.linkedin.com/company/trikaya-tech"
                aria-label="LinkedIn"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={18} color="white" />
              </Link>
              <Link
                href="https://x.com/trikaya_tech"
                target="_blank"
                aria-label="X (formerly Twitter)"
                className="hover:text-white transition-colors"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/trikaya_tech"
                aria-label="Instagram"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <Instagram size={18} color="white" />
              </Link>
              <Link
                href="#"
                aria-label="telegram"
                className="hover:text-white transition-colors"
              >
                <FaTelegram color="white" />
              </Link>
              <Link
                href="#"
                aria-label="Whatsapp"
                className="hover:text-white transition-colors"
              >
                <FaWhatsapp color="white" />
              </Link>

              <Link
                href="#"
                aria-label="Discord"
                className="hover:text-white transition-colors"
              >
                <FaDiscord color="white" />
              </Link>
            </div>

            <p className="mt-6 text-base font-normal text-white">
              © {new Date().getFullYear()} Trikaya. All rights reserved.
            </p>
          </div>

          {/* ===== Right Section (60%) ===== */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:w-3/5">
            {/* Platform */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/learn" className="transition-colors hover:text-white">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className="transition-colors hover:text-white">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link href="/arena" className="transition-colors hover:text-white">
                    Arena
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship" className="transition-colors hover:text-white">
                    Mentorship
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="">
              <h3 className="mb-4 font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    {/* Jobs & Internship */}
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="transition-colors hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="transition-colors hover:text-white">
                    {/* Resources */}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="transition-colors hover:text-white">
                    For Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="transition-colors hover:text-white"
                  >
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
