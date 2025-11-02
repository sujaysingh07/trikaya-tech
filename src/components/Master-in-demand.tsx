import Container from "./ui/Container";

export default function MasterInDemand(){
    return <section className="py-12">
        <Container>

            <div className="flex flex-col gap-[3px]">
                <h2 className="font-bold text-4xl">Master in -Demand  <span className="text-primary-color">Tech Skills</span> </h2>
                <span className="text-base font-normal">Choose from four cutting-edge technology domains designed to prepare you for the future of work.</span>
            </div>
        
        </Container>

    </section>
}