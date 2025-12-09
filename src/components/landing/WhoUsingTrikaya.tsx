import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";

import TrikayaPeoples from "@/public/trikaya-people.jpg";
import TrikayaCompanies from "@/public/trikaya-companies.jpg";
import TrikayaCollege from "@/public/trikaya-college.jpg";
import SectionHeader from "../common/SectionHeader";

export default function WhoTrikaya() {
  const cards = [
    {
      image: TrikayaPeoples,
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
    <section className="mb-11">
      <Container>
        <SectionHeader title={"Who’s using "} highlight="Trikaya?" />
        <div className="mt-10 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <TrikayaCard
              key={index}
              image={card?.image}
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
    <div className="flex max-w-sm flex-col overflow-hidden rounded-[30px] bg-[#F1F3F4] p-2.5 shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-[153px] w-full overflow-hidden rounded-t-[30px] rounded-b-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Text Section */}
      <h3 className="py-2 text-center text-lg font-bold text-black md:text-[22px]">
        {title}
      </h3>

      <div className="flex grow flex-col justify-between rounded-t-lg rounded-b-[30px] bg-white px-[15px] py-5 text-center">
        <p className="text-sm font-normal tracking-tight text-[#03061E] md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
