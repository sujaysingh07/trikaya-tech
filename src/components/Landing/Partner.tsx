import Image from "next/image";
import Link from "next/link";

export default function Partners() {
    const partners = [
        { name: "MSME", logo: "/msme.png" },
        { name: "DPIIT", logo: "/dpiit.png" },
        { name: "Make in India", logo: "/makeinindia.png" },
        { name: "GyaanSetu", logo: "/gyaansetu.png" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-[42px] font-bold mb-2">
                    Partners &amp; Accreditations
                </h2>

                {/* View All Link */}
                <Link
                    href="#"
                    className="text-primary-color text-base font-semibold hover:underline inline-block mb-10"
                >
                    View All Partners
                </Link>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex justify-center items-center">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={150}
                                height={80}
                                className="object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
