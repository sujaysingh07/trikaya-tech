import BusinessMapEmbed from "@/src/components/BusinessMapEmbed";
import Banner from "@/src/components/common/CommonBanner";
import { generatePageMetadata } from "@/src/lib/generatePageMetadata";
import { generateCanonical } from "@/src/lib/utils";

export const metadata = generatePageMetadata({
  title:
        " Contact Trikaya | Support & Business Inquiries",
    description: 'Have questions? Contact Trikaya for support with AI and Blockchain learning, job opportunities, or business partnerships. Reach out and connect with us today.',
  canonical: generateCanonical("/contact-us"),
});
export const ContactUs = () => {

    return (
        <>
            <Banner
                title={"Contact"}
                highlight={"Trikaya"}
                description="Get in touch with us for any questions, support, services or partnership inquiries."
                image="/contact-bg.png"

            />
            <BusinessMapEmbed />

         
        </>
    );
};

export default ContactUs