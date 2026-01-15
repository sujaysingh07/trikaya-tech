import NotFound from "@/src/components/common/NotFound";
import JobDetailsContainer from "@/src/container/Jobs/JobsDetails";
import { httpRequest } from "@/src/lib/httpClient";
import { APIResponse, JobDetailstype } from "@/src/lib/types/commonTypes";
import { generateCanonical } from "@/src/lib/utils";


import type { Metadata } from "next";

export async function generateMetadata(
    { params, ogImage = "/favicons/trikaya-og-logo.png", }:
        { params: Promise<{ slug: string }>, ogImage?: string }
): Promise<Metadata> {
    const slug = (await params).slug
    const job = await fetchJobDetailsBySlug(slug);
    if (!job) {
        return {
            title: "Job Not Found | Trikaya",
            description: "The requested internship does not exist.",
        };
    }


    return {
        title:
            job.meta_title ??
            `${job.title} | Trikaya Jobs`,
        description:
            job.meta_description ??
            "Launch your tech journey with hands-on Jobs in AI & Web3.",
        keywords:
            job.meta_keywords ?? [
                "Trikaya AI Jobs",
                "Trikaya Web3 Jobs",
                "Trikaya Blockchain Jobs",
            ],
        alternates: {
            canonical: generateCanonical(`/jobs/${slug}`),
        },
        openGraph: {
            images: [
                {
                    url: job.og_image || ogImage,
                    width: 1024,
                    height: 630,
                    alt: job.meta_title ??
                        `${job.title} | Trikaya Jobs`,
                },
            ],
        }
    };
}



const fetchJobDetailsBySlug = async (slug: string) => {
    const response = await httpRequest<APIResponse<JobDetailstype>>(
        `/api/v1/jobs/${slug}`,
        { fresh: true }
    );
    return response.data;
};

export default async function JobDetails({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const JobDetails = await fetchJobDetailsBySlug(slug);
    console.log(JobDetails)

    if (!JobDetails) {
        return <NotFound name={slug} />;
    }
    return <JobDetailsContainer jobDetails={JobDetails} />

}

