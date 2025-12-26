import BusinessMapEmbed from "@/src/components/BusinessMapEmbed";
import Banner from "@/src/components/common/CommonBanner";

export const ContactUs = () => {
    return (
        <>
            <Banner
                title={"Contact "}
                highlight={"Trikaya"}
                description="Get in touch with us for any questions, support, services or partnership inquiries."
                image="/contact-bg.png"

            />
            <BusinessMapEmbed />

         
        </>
    );
};

export default ContactUs