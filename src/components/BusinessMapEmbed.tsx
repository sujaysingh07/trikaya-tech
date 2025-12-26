"use client";

import OfficeAddress from "./common/Address";
import Container from "./ui/Container";

export default function BusinessMapEmbed() {
    return (
        <Container>
            <div className="mx-auto max-w-5xl ">

                <div
                    className="my-12  overflow-hidden rounded-[30px]"
                    style={{ height: "400px" }}
                >
                    <iframe
                        title="Trikaya HR Tech Solutions LLP"
                        src="https://www.google.com/maps?q=Trikaya+HR+Tech+Solutions+LLP&ll=12.9782857,77.7278491&z=18&output=embed"
                        width="100%"
                        height="100%"
                        loading="lazy"
                    />

                </div>

                <OfficeAddress />
            </div>



        </Container>
    );
}
