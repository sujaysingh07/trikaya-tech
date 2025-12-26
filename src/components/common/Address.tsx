import { Icons } from "@/public/icons/icon";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

const offices = [
    {
        city: "Bangalore",
        address:
            "JBR Tech Park, Plot No. 77, 6th Rd, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066.",
    },
    {
        city: "Raipur",
        address:
            "305, Magnate Office Magneto Mall, G.E. Road, Labhandi, Raipur (C.G.) – 492001.",
    },
    {
        city: "Indore",
        address: "Samraddhi Park, Indore, Madhya Pradesh 452016.",
    },
];

const contacts = [
    {
        icon: "Web",
        label: "Website",
        value: "www.trikaya.io",
        href: "https://www.trikaya.io",
    },
    {
        icon: "Mail",
        label: "Email",
        value: "info@trikaya.io",
        href: "mailto:info@trikaya.io",
    },
    {
        icon: "Phone",
        label: "Phone",
        value: "(+91)-9630936959",
        href: "tel:+919630936959",
    },
];

export default function OfficeAddress() {
    return (
        <section
            aria-labelledby="office-address-title"
            className="w-full pb-11"
        >
            {/* Title */}
            <div className="flex items-center gap-2 mb-6">
                <Icons variant="map-pin" />
                <h2
                    id="office-address-title"
                    className="text-2xl font-bold"
                >
                    Our Office
                </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 md:flex-row">
                {/* LEFT: Offices */}
                <div className="md:w-[65%]">
                    {offices.map(({ city, address }) => (
                        <div key={city} className="mb-5 last:mb-0">
                            <strong className="block mb-1 text-lg md:text-[20px]">
                                {city}
                            </strong>
                            <p className="text-sm md:text-base text-black leading-relaxed">
                                {address}
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Contact Info */}
                <div className="md:w-[35%] space-y-4">
                    {contacts.map(({ icon, label, value, href }) => (
                        <div key={label} className="flex items-center gap-4">
                            <Icons variant={icon} />

                            <Link
                                href={href}
                                target={label === "Website" ? "_blank" : undefined}
                                rel={label === "Website" ? "noopener noreferrer" : undefined}
                                className={cn(
                                    "text-base md:text-[20px] font-normal text-black hover:underline underline-offset-2",
                                    icon === "Mail" && "text-primary-color",
                                    icon === "Phone" && "underline"
                                )}
                                aria-label={label}
                            >
                                {value}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
