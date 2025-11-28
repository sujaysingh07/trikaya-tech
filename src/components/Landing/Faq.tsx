
import InviteFaq from "./invite-faq";
import Container from "../ui/Container";
import Image from "next/image";
import CallToAction from "../common/CallToAction";
export default function ReferralFaqSection() {
  return (
    <section className="bg-primary-color relative pt-11 text-white md:pb-[300px]">
      <Image
        src="/rocket-bg.svg"
        alt="Rocket Background"
        fill
        priority
        className="pointer-events-none hidden object-cover object-bottom select-none md:block"
      />

      <Container>
        <InviteFaq />
      </Container>
      <CallToAction
        title="Ready to Launch Your Tech Career?"
        subtitle={
          <>
            Join thousands of learners who have transformed their careers with{" "}
            <span className="font-normal">Trikaya</span>. <br />
            Start your journey today with our free trial.
          </>
        }
        buttons={[
          { label: "Start Learning", href: "#", variant: "primary" },
          { label: "Explore Labs", href: "#", variant: "secondary" },
        ]}
        showRocketBg={false}
      />
    </section>
  );
}
