import Link from "next/link";
import InviteFaq from "./invite-faq";
import Container from "../ui/Container";
import Image from "next/image";
import CallToAction from "../common/CallToAction";
export default function ReferralFaqSection() {
  return (
    <section className="relative bg-primary-color pt-16 pb-[300px] text-white">
      <Image
        src="/rocket-bg.svg"
        alt="Rocket Background"
        fill
        priority
        className="object-cover object-bottom pointer-events-none select-none"
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
