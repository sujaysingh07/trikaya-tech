import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion";
import { curriculumData } from "./curriculumData";


export default function CurriculumAccordion() {
    return (
        <div className="relative pl-10">
            <Accordion
                type="single"
                collapsible
                defaultValue={curriculumData[0].id}
                className="space-y-6"
            >
                {curriculumData.map((course, index) => (
                    <TimelineAccordionItem
                        key={course.id}
                        value={course.id}
                        isLast={index === curriculumData.length - 1}
                    >
                        <AccordionTrigger className="text-left no-underline hover:no-underline decoration-transparent cursor-pointer ">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[22px] text-[#03061E] font-semibold ">
                                        {course.title}
                                    </h3>

                                    {course.badge && (
                                        <span className="rounded-full bg-[#FFE9BE] px-4 py-1 text-xs font-bold text-[#555555]">
                                            {course.badge}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-1 text-sm text-[#666666]">
                                    {course.courseMeta}
                                </p>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            {course.description && (
                                <p className=" text-base font-normal tracking-[0.5%] text-[#666666]">
                                    {course.description}
                                </p>
                            )}

                            <div className=" my-4 h-0.5 bg-[#CCCCCC]" />
                            {(course.topics || course.skills) && (
                                <div className="grid gap-8 md:grid-cols-2">
                                    {course.topics && (
                                        <div>
                                            <h4 className="mb-3 text-[22px] font-semibold">
                                                Topics Covered
                                            </h4>
                                            <ul className="list-disc space-y-2 pl-5 text-sm text-[#666666]">
                                                {course.topics.map((topic) => (
                                                    <li key={topic}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {course.skills && (
                                        <div>
                                            <h4 className="mb-3 text-[22px] font-semibold">
                                                Skills Required
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {course.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="rounded-[6px] border border-[#000000] px-3 py-2 text-sm font-normal"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </AccordionContent>
                    </TimelineAccordionItem>
                ))}
            </Accordion>
        </div>
    );
}



function TimelineAccordionItem({
    value,
    children,
    isLast,
}: {
    value: string;
    children: React.ReactNode;
    isLast: boolean;
}) {
    return (
        <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[33px] top-6 z-10 h-4 w-4 rounded-full bg-primary-color" />

            {/* Timeline Line (NOT for last item) */}
            {!isLast && (
                <div className="absolute -left-6.5 top-9 h-[120%] border-l-2 border-dashed border-[#62AAD0]" />
            )}

            <AccordionItem
                value={value}
                className="rounded-[30px] border  border-[#CCCCCC] bg-white px-6 py-2 last:border-b"
            >
                {children}
            </AccordionItem>
        </div>
    );
}

