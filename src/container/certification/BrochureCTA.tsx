import Container from "@/src/components/ui/Container";

export default function BrochureCTA() {
    return (
        <Container className="py-11">

        <section className="w-full rounded-[30px] bg-blue-50 px-6 py-10 sm:px-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <h2 className="text-[35px] font-bold text-black">
                    Need to know more?
                </h2>

                <p className="mt-2  text-base text-black ">
                    Get all the details you need about the Executive Diploma in
                    Machine Learning & AI, whenever you want them.
                </p>

                <button className="mt-6 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90">
                    Download Brochure
                </button>
            </div>
        </section>
        </Container>
    );
}
