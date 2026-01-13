import Container from "@/src/components/ui/Container";
import Image from "next/image";

export default function CertificationHighlight() {
  return (
    <Container>

    <section className="my-[100px] w-full rounded-2xl bg-[#faf9f7] p-6 md:p-8">
      <div className="grid gap-[86px] md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          {/* Certificate Image */}
          <div className="">
            <Image
              src="/certificate-sample.png" // replace with your image
              alt="Certificate"
              width={516}
              height={357}
              quality={100}
              className="w-full rounded-md"
            />
          </div>

          {/* Text */}
          <div className="mt-6">
            <h2 className="text-[37px] leading-snug font-extrabold text-black">
              Own Your Place in the <br /> future,{" "}
              <span className="text-primary-color">Get Certified</span> with
              Coding Ninjas.
            </h2>

            <button className="border-primary-color text-primary-color hover:bg-primary-color mt-6 w-full cursor-pointer rounded-[10px] border px-6 py-3 text-[20px] font-semibold transition hover:text-white">
              View Full Curriculum
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col divide-y divide-[#CCCCCC]">
          <Stat
            value="70%"
            text="faster coding productivity"
            source="Github Research"
          />
          <Stat
            value="2.3 millions"
            text="job by 2027"
            source="Times of India"
          />
          <Stat
            value="80%"
            text="enterprises will use GenAI by 2026"
            source="Data Centre Dynamics"
          />
          <Stat value="53%" text="skill gap" source="Economic Times" />
        </div>
      </div>
    </section>
    </Container>

  );
}

function Stat({
  value,
  text,
  source,
}: {
  value: string;
  text: string;
  source: string;
}) {
  return (
    <div className="flex flex-col gap-1 py-5">
      <p className="text-[37.23px] font-extrabold tracking-wide text-black">
        {value} {text}
      </p>
      <p className="text-base leading-[26px] font-normal text-black">
        {source}
      </p>
    </div>
  );
}
