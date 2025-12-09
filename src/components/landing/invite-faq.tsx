import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Button } from "../ui/button";
const faqItems = [
  {
    id: 1,
    question: "Is there a limit to referrals?",
    answer:
      "No, you can refer as many friends as you like — the more you refer, the more credits you earn.",
  },
  {
    id: 2,
    question: "When do I receive my referral credits?",
    answer:
      "Credits are added to your account as soon as your friend completes their first eligible course.",
  },
  {
    id: 3,
    question: "Can I use referral credits to subscribe to some services?",
    answer:
      "Yes, you can use them to unlock premium content and mentorship programs.",
  },
  {
    id: 4,
    question: "Can I transfer my credits to someone else?",
    answer:
      "No, referral credits are non-transferable and can only be used by the account holder.",
  },
];
export default function InviteFaq() {
  return (
    <div className="z-99 grid grid-cols-1 items-stretch gap-8 px-0 md:-mt-[350px] md:px-6 lg:h-[593px] lg:grid-cols-[30%_70%] lg:px-0">
      {/* LEFT: Invite Friends Card */}
      <div className="z-10 my-5 h-auto w-auto flex-col justify-between overflow-hidden rounded-[30px] bg-[#ECECEC] text-[#03061E] shadow-lg md:h-[553px] md:w-[120%]">
        <div className="p-8">
          <h2 className="text-3xl leading-snug font-bold md:text-[42px]">
            Invite friends. <br />
            <span className="text-primary-color">Earn credits.</span>
          </h2>
          <p className="mt-3 text-base md:text-[22px] md:leading-9">
            Share Trikaya with friends and unlock rewards.
          </p>

          <Button className="bg-primary-color mt-6 rounded-lg px-5 text-base text-white hover:bg-[#0848c5]">
            Get your referral link
          </Button>
        </div>

        {/* Image */}
        <div className="hidden w-full md:block">
          <Image
            src="/peple-bg.png"
            alt="Invite Friends"
            width={600}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT: FAQ Section */}
      <div className="border-primary-color h-auto rounded-[30px] border-2 bg-[#073593] p-6 text-white shadow-lg md:p-8 lg:h-[593px] lg:pl-[120px]">
        <h3 className="mb-4 text-[34px] font-semibold">Common Questions</h3>

        <div className="border-t border-white/20 pt-4">
          <p className="mb-4 text-base leading-relaxed font-light">
            <strong className="text-base font-bold">
              How do referral credits work?
            </strong>
            <br />
            When someone signs up using your referral link and completes their
            first course, you both receive 100 learning credits. Credits can be
            used to unlock premium courses, mentorship sessions, or
            certification exams.
          </p>

          {/* Accordion for other questions */}
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map(({ id, question, answer }) => (
              <AccordionItem
                key={id}
                value={`item-${id}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-base font-bold text-white hover:no-underline [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-white">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
