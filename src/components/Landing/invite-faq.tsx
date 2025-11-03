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
export default function InviteFaq(){
    return <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] h-[593px] items-stretch -mt-[350px] z-99">
        {/* LEFT: Invite Friends Card */}
        <div className="bg-[#ECECEC] text-[#03061E] rounded-[30px] h-[553px] overflow-hidden flex-col justify-between shadow-lg my-5 w-[120%] z-10">
            <div className="p-8">
                <h2 className="text-[42px] sm:text-3xl font-bold leading-snug">
                    Invite friends. <br />
                    <span className="text-primary-color">Earn credits.</span>
                </h2>
                <p className=" mt-3 text-[22px] sm:text-base leading-9">
                    Share Trikaya with friends and unlock rewards.
                </p>

                <Button className="mt-6 bg-primary-color hover:bg-[#0848c5] text-base text-white rounded-lg px-5">
                    Get your referral link
                </Button>
            </div>

            {/* Image */}
            <div className="w-full">
                <Image
                    src="/peple-bg.png"
                    alt="Invite Friends"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>

        {/* RIGHT: FAQ Section */}
        <div className="bg-[#073593] border-primary-color border-2 h-[593px] rounded-[30px] p-8 text-white shadow-lg pl-[120px]">
            <h3 className="text-[34px] font-semibold mb-4">Common Questions</h3>

            <div className="border-t border-white/20 pt-4">
                <p className=" text-base font-light leading-relaxed mb-4">
                    <strong className="text-base font-bold">
                        How do referral credits work?
                    </strong>
                    <br />
                    When someone signs up using your referral link and completes
                    their first course, you both receive 100 learning credits.
                    Credits can be used to unlock premium courses, mentorship
                    sessions, or certification exams.
                </p>

                {/* Accordion for other questions */}
                <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqItems.map(({ id, question, answer }) => (
                        <AccordionItem
                            key={id}
                            value={`item-${id}`}
                            className="border-b border-white/10"
                        >
                            <AccordionTrigger className="text-white text-base font-bold hover:no-underline [&>svg]:text-white [&>svg]:h-6 [&>svg]:w-6">
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
}