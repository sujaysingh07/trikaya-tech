"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/common/SectionHeader";
import { faqs } from "./Faq.data";
import { Minus, Plus } from "lucide-react";


export default function FaqSection() {
    return (
        <Container>
            <SectionHeader
                title="Faqs"
                description="Hear what our students have to say"
            />

            <div className="my-11">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border-b"
                        >
                            <AccordionTrigger
                                className="
    group flex w-full items-center justify-between
    py-5 text-left text-sm font-medium
    hover:no-underline
    [&>svg]:hidden
  "
                            >
                                <span className="text-[#03061E] font-semibold text-base leading-[25px]">{faq.question}</span>

                                <span className="transition">
                                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                                    <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                                </span>
                            </AccordionTrigger>



                            <AccordionContent className="pb-5 text-sm text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Container>
    );
}
