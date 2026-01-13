import HackathonDetailsConatiner from "@/src/container/hackathon/HackathonDetails"

export default async function HackathonDetails({params}:{params:Promise<{slug:string}>}){
    const {slug}=await params
    console.log(slug)
    return <HackathonDetailsConatiner />
}
