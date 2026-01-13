import Banner from "@/src/components/common/CommonBanner";
import Container from "@/src/components/ui/Container";
import HackathonComponent from "./HackathonComponent";

export default function Hackathon() {
  return (
    <>
      {" "}
      <Banner
        title={"Trikaya "}
        highlight={"Hackathon"}
        description="Think of a hackathon as a high-intensity lab session where you can condense weeks of self-study into a single weekend."
        image="/hackathon-banner.png"
      />
      <Container>
        <HackathonComponent/>
      </Container>
    </>
  );
}
