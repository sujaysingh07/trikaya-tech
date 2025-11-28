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
      <div className="md:border-primary-color mb-11 w-full rounded-[30px] md:border">
        {/* Heading */}
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-center gap-4 py-[23px] text-center">
          <SectionHeader
            title={title || ""}
            className=""
            description={subtitle}
          />
          {/* Input + Button */}
          <SubscribeForm />

          {/* Privacy note */}
          <span className="mt-1 text-xs text-[#000000]">{note}</span>
        </div>
      </div>
    </Container>
  );
}
