import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";

import TrikayaPeople from "@/public/trikaya-people.jpg";
import TrikayaCompanies from "@/public/trikaya-companies.jpg";
import TrikayaCollege from "@/public/trikaya-college.jpg";
import SectionHeader from "../common/SectionHeader";

export default function WhoTrikaya() {
  const cards = [
    {
      image: TrikayaPeople,
      title: "Students and Professionals",
      description: (
        <>
          <span className="font-bold text-black">Unlock Your Potential:</span>{" "}
          Learn, Practice, Build Verified Resume, Grow and get Hired!
        </>
      ),
    },
    {
      image: TrikayaCompanies,
      title: "Companies and Recruiters",
      description: (
        <>
          <span className="font-bold text-black">
            Discover Verified Talent:
          </span>{" "}
          Hire, Engage, and Brand Like Never Before!
        </>
      ),
    },
    {
      image: TrikayaCollege,
      title: "Colleges",
      description: (
        <>
          <span className="font-bold text-black">
            Bridge Academia and Industry:
          </span>{" "}
          Empower Students with Real-World Opportunities in Emerging
          Technologies.
        </>
      ),
    },
  ];

  return (
    <section className="py-12 ">
      <Container>
        <SectionHeader title={"Who’s using "} highlight="Trikaya?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
          {cards.map((card, index) => (
            <TrikayaCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

const TrikayaCard = ({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="bg-[#F1F3F4] p-2.5 rounded-[30px] shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-[153px] rounded-t-[30px] rounded-b-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Text Section */}
      <h3 className="font-bold text-center text-lg md:text-[22px] text-black py-2">
        {title}
      </h3>

      <div className="flex flex-col grow justify-between bg-white rounded-b-[30px]  rounded-t-lg py-5 px-[15px] text-center">
        <p className="text-[#03061E] text-sm md:text-base font-normal tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
};
