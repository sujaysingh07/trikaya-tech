import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  const partners = [
    { name: "MSME", logo: "/logo/msme.png" },
    { name: "DPIIT", logo: "/logo/dpiit.png" },
    { name: "Make in India", logo: "/logo/makeinindia.png" },
    { name: "GyaanSetu", logo: "/logo/gyaansetu.png" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold md:text-[42px]">
          Partners &amp; Accreditations
        </h2>

        {/* View All Link */}
        <Link
          href="#"
          className="text-primary-color mb-10 inline-block text-base font-semibold hover:underline"
        >
          View All Partners
        </Link>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
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
