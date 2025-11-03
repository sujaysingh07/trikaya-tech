import Link from "next/link";
import InviteFaq from "./invite-faq";
import Container from "./ui/Container";
import Image from "next/image";
export default function ReferralFaqSection() {
  return (
    <section className="relative bg-primary-color pt-16 pb-[300px] text-white">
      {/* Rocket Background */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 w-full h-[400px] bg-[url('/rocket-bg.svg')] bg-no-repeat bg-bottom pointer-events-none"
        aria-hidden="true"
      /> */}
      <Image
        src="/rocket-bg.svg"
        alt="Rocket Background"
        fill
        priority
        className="object-cover object-bottom pointer-events-none select-none"
      />
      <Container>
        <InviteFaq />
        <div className="text-center mt-20">
          <h2 className="text-[42px] sm:text-[40px] font-bold mb-3">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-[#FFFFFF] font-normal text-[28px] sm:text-xl mb-8">
            Join thousands of learners who have transformed their careers with{" "}
            <span className="font-normal">Trikaya</span>. <br />
            Start your journey today with our free trial.
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-center gap-4">
            <Link
              href={""}
              className="px-6 py-3 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Start Learning
            </Link>
            <Link
              href={"#"}
              className="px-6 py-3 bg-white text-primary-color rounded-md text-lg font-semibold transitionn"
            >
              Explore Labs
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
