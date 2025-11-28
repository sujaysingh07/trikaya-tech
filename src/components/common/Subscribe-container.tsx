
import SectionHeader from "./SectionHeader";
import SubscribeForm from "./SubscribeForm";
import Container from "../ui/Container";

export default function SubscribeCard({
  title,
  subtitle,
  note,
}: {
  title?: string;
  subtitle?: string;
  note?: string;
}) {


  return (
    <Container className="">
      <div className=" w-full md:border-primary-color  md:border rounded-[30px] mb-11">
        {/* Heading */}
        <div className="py-[23px] flex flex-col max-w-[800px] w-full justify-center mx-auto text-center gap-4">
          <SectionHeader
            title={title || ""}
            className=""
            description={subtitle}
          />
          {/* Input + Button */}
          <SubscribeForm />

          {/* Privacy note */}
          <span className="text-xs text-[#000000] mt-1">
           {note}
          </span>
        </div>
      </div>
    </Container>
  );
}
