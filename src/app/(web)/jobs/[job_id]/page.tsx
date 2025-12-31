import JobDetailsContainer from "@/src/container/Jobs/JobsDetails";

type Props = {
    params: Promise<{
        job_id: string;
    }>;
};

export default async function JobDetails({ params }: Props) {
    const { job_id } = await params;
    console.log(job_id)
    return <JobDetailsContainer />;
}
