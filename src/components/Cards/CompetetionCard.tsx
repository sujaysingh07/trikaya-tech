import { CompetitionType } from "@/src/app/(web)/arena/page";
import Image from "next/image";
import Link from "next/link";
export default function CompetetionCard(comp: CompetitionType) {
  return (
    <div className="w-full overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[191px] w-full">
        <Image
          src={comp.image}
          alt={comp.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5">
        <div>
          <h3 className="mb-1 text-[22px] font-semibold text-[#03061E]">
            {comp.title}
          </h3>
          <p className="mb-[26px] text-base font-normal text-[#666666]">
            {comp.subtitle}
          </p>

          <div className="flex flex-col gap-2 text-base font-normal">
            <div className="flex items-center justify-between">
              <span className="text-base">Participants</span>
              <div className="flex items-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 10.1165C13.7336 10.1165 15.139 8.71111 15.139 6.97745C15.139 5.24379 13.7336 3.83838 11.9999 3.83838C10.2663 3.83838 8.86084 5.24379 8.86084 6.97745C8.86084 8.71111 10.2663 10.1165 11.9999 10.1165Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.2197 5.09401C14.4681 4.66387 14.8385 4.31704 15.2839 4.09735C15.7294 3.87768 16.23 3.79504 16.7224 3.85986C17.2148 3.92469 17.677 4.13409 18.0504 4.46157C18.4238 4.78906 18.6918 5.21992 18.8204 5.69968C18.9488 6.17944 18.9322 6.68654 18.7726 7.15686C18.6129 7.62718 18.3173 8.03959 17.9233 8.34196C17.5293 8.64431 17.0544 8.82304 16.5588 8.85552C16.0632 8.88801 15.5692 8.77279 15.139 8.52445"
                    stroke="#666666"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9.78037 5.09401C9.53201 4.66387 9.16166 4.31704 8.7162 4.09735C8.27074 3.87768 7.77015 3.79504 7.27771 3.85986C6.78528 3.92469 6.32313 4.13409 5.94971 4.46157C5.57629 4.78906 5.30836 5.21992 5.17981 5.69968C5.05126 6.17944 5.06786 6.68654 5.22751 7.15686C5.38716 7.62718 5.6827 8.03959 6.07674 8.34196C6.47078 8.64431 6.94564 8.82304 7.44125 8.85552C7.93687 8.88801 8.43098 8.77279 8.86113 8.52445"
                    stroke="#666666"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11.9997 12.6278C17.1229 12.6278 18.4455 16.7741 18.7869 18.9147C18.8961 19.5996 18.3435 20.1616 17.6501 20.1616H6.34939C5.65592 20.1616 5.10334 19.5996 5.21256 18.9147C5.55394 16.7741 6.87645 12.6278 11.9997 12.6278Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.3648 12.7357L12.9012 12.3124L12.1221 13.1656L13.2618 13.355L13.3648 12.7357ZM18.5056 17.6503L17.9025 17.8249L18.0337 18.2782H18.5056V17.6503ZM16.3945 12C17.6849 12 18.5912 12.6312 19.2552 13.5154C19.9325 14.4175 20.3301 15.5542 20.5525 16.4421L21.7706 16.1371C21.5305 15.1786 21.0816 13.8567 20.2593 12.7616C19.4238 11.6488 18.1777 10.7444 16.3945 10.7444V12ZM13.8283 13.159C14.4567 12.4709 15.2778 12 16.3945 12V10.7444C14.8661 10.7444 13.7245 11.4106 12.9012 12.3124L13.8283 13.159ZM13.2618 13.355C16.1504 13.835 17.3726 15.993 17.9025 17.8249L19.1086 17.4758C18.5171 15.4311 17.0461 12.7111 13.4677 12.1164L13.2618 13.355ZM20.0295 17.0225H18.5056V18.2782H20.0295V17.0225ZM20.5525 16.4421C20.62 16.7119 20.4219 17.0225 20.0295 17.0225V18.2782C21.1228 18.2782 22.0639 17.3084 21.7706 16.1371L20.5525 16.4421Z"
                    fill="#666666"
                  />
                  <path
                    d="M10.6354 12.7357L10.7383 13.355L11.8781 13.1656L11.0989 12.3124L10.6354 12.7357ZM5.49453 17.6503V18.2782H5.96646L6.09761 17.8249L5.49453 17.6503ZM7.60564 12C8.72229 12 9.54346 12.4709 10.1717 13.159L11.0989 12.3124C10.2756 11.4106 9.13404 10.7444 7.60564 10.7444V12ZM3.44757 16.4421C3.66993 15.5542 4.06764 14.4175 4.74491 13.5154C5.4089 12.6312 6.31519 12 7.60564 12V10.7444C5.8224 10.7444 4.57635 11.6488 3.74081 12.7616C2.91855 13.8567 2.46956 15.1786 2.22956 16.1371L3.44757 16.4421ZM3.97057 17.0225C3.57818 17.0225 3.38001 16.7119 3.44757 16.4421L2.22956 16.1371C1.93619 17.3084 2.87725 18.2782 3.97057 18.2782V17.0225ZM5.49453 17.0225H3.97057V18.2782H5.49453V17.0225ZM6.09761 17.8249C6.62756 15.993 7.84968 13.835 10.7383 13.355L10.5324 12.1164C6.95399 12.7111 5.48301 15.4311 4.89145 17.4758L6.09761 17.8249Z"
                    fill="#666666"
                  />
                </svg>

                <span className="text-base">{comp.participants}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-base">
              <span>Prize Pool</span>
              <span className="font-medium">{comp.prizePool}</span>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="bg-primary-color mx-auto mt-[44px] max-w-[226px] justify-center rounded-md px-[30px] py-2.5 text-center text-sm font-medium text-white transition hover:bg-[#0048d9]"
        >
          Join Competition
        </Link>
      </div>
    </div>
  );
}
