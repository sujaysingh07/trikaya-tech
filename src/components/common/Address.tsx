import { Icons } from "@/public/icons/icon";
import { cn } from "@/src/lib/utils";
import { Globe, Mail, Phone } from "lucide-react";
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
        address:
            "Samraddhi Park, Indore, Madhya Pradesh 452016.",
    },
];

const contacts = [
    {
        icon: 'Web',
        label: "Website",
        value: "www.trikaya.io",
        href: "https://www.trikaya.io",
    },
    {
        icon: 'Mail',
        label: "Email",
        value: "info@trikaya.io",
        href: "mailto:info@trikaya.io",
    },
    {
        icon: 'Phone',
        label: "Phone",
        value: "(+91)-9630936959",
        href: "tel:+919630936959",
    },
];

export default function OfficeAddress() {
    return (
        <section
            aria-labelledby="office-address-title"
            className="w-full table pb-11"
        >
            <div className="table-row">
                {/* LEFT COLUMN */}
                <div className="table-cell align-top w-[65%] pr-10">
                    {/* Title */}
                    <div className="table mb-6">
                        <div className="table-cell align-middle">
                            <Icons variant="map-pin" />
                        </div>
                        <h2
                            id="office-address-title"
                            className="table-cell pl-2 text-2xl font-bold"
                        >
                            Our Office
                        </h2>
                    </div>

                    {/* Offices */}
                    {offices.map(({ city, address }) => (
                        <div key={city} className="mb-4 last:mb-0">
                            <strong className="block mb-1 text-[20px]">{city}</strong>
                            <p className="text-base text-[#000000] leading-relaxed">
                                {address}
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="table-cell align-top w-[35%]">
                    {contacts.map(({ icon, label, value, href }) => (
                        <div key={label} className="table mb-3 last:mb-0">
                            <div className="table-cell align-middle w-[30px] h-[30px]"><Icons variant={icon}/></div>
                            <Link
                                href={href}
                                target={label === "Website" ? "_blank" : undefined}
                                rel={label === "Website" ? "noopener noreferrer" : undefined}
                                className={cn(`table-cell pl-4 text-[20px] font-normal text-black hover:underline underline-offset-2 `, icon === 'Mail' && 'text-primary-color', icon==='Phone' && 'underline')}
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
