import JobDetailsContainer from "@/src/container/Jobs/JobsDetails";
import { httpRequest } from "@/src/lib/httpClient";
import { APIResponse, JobDetailstype } from "@/src/lib/types/commonTypes";



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

    return <JobDetailsContainer jobDetails={JobDetails} />

}

