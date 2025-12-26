export const dynamic = "force-dynamic";
import Banner from "@/src/components/common/CommonBanner";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/BrainWires.svg";
import problemSolving from "@/public/icons/WirelessNetwork.svg";
import NotVerified from "@/public/icons/Mentor.svg";
import WirelessNetwork from "@/public/icons/BadgeVerification.svg";
import SectionHeader from "@/src/components/common/SectionHeader";
import Container from "@/src/components/ui/Container";
import CommunityCard from "@/src/components/cards/CommunityCard";
import CommunityJoinCard from "@/src/components/cards/CommunityJoinCard";
import MeetupCallout from "@/src/components/common/MeetupCallout";
import LeaderboardRow from "@/src/components/common/Community-leaderboard";
import GenericButton from "@/src/components/common/GenericButton";
import GenericProfileCard from "@/src/components/cards/GenericProfileCard";
import CallToAction from "@/src/components/common/CallToAction";
import GradientImageCardThree from "@/src/components/cards/GradientImageCardThree";
import { httpRequest } from "@/src/lib/httpClient";
import { APIResponse, EventsDataType } from "@/src/lib/types/commonTypes";
import { formatEventWithDate, getFormattedCurrentDateTime, mapCategoryToMode } from "@/src/lib/common";
import SkillCard from "@/src/components/cards/SkillCard";
import NotFound from "@/src/components/common/NotFound";
export default async function Community() {
  const startDate = getFormattedCurrentDateTime();
  const EventsData = await httpRequest<APIResponse<[]>>(
    `/api/v1/events?startDate=${startDate}`
  );




  const mentorCards = [
    {
      icon: rewards,
      title: "Collaborate & Share",
      description:
        "Join discussions, exchange ideas, and co-create with peers.",
    },
    {
      icon: NotVerified,
      title: "Learn from Mentors",
      description:
        "Get direct access to experts through AMA sessions and workshops.",
    },
    {
      icon: problemSolving,
      title: "Network Globally",
      description:
        "Connect with developers, professionals, and hiring partners worldwide.",
    },
    {
      icon: WirelessNetwork,
      title: "Earn Recognition",
      description:
        "Get rewarded for your contributions and verified activity on blockchain.",
    },
  ];
  const posts = [
    {
      title: "Building a DeFi Protocol – Tips & Tricks",
      author: "Alex Kumar",
      likes: 123,
      tags: ["Blockchain", "DeFi"],
      isActive: true,
    },
    {
      title: "My Journey from Bootcamp to FAANG",
      author: "Priya Sharma",
      likes: 89,
      tags: ["Career", "Success"],
    },
    {
      title: "AI Model Optimization Techniques",
      author: "Rahul Mehta",
      likes: 67,
      tags: ["All", "Tips"],
    },
    {
      title: "Trikaya Community Meetup – Bangalore",
      author: "Community Team",
      likes: 203,
      tags: ["Announcement", "Events"],
    },
  ];
  const data = [
    {
      icon: "/icons/group-discussion.svg",
      title: "Blockchain Builders",
      description: "Discuss smart contracts, DeFi, and on-chain innovation.",
      members: "45K+ members",
      buttonLabel: "Join Group Now",
    },
    {
      icon: "/icons/calendar.svg",
      title: "AI Innovators",
      description: "Collaborate on ML, NLP, and GenAI projects.",
      members: "10K+ members",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Data Science Hub",
      description: "Share datasets, visualizations, and analytics tricks.",
      members: "23K+ members",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Cybersecurity Club",
      description: "Explore vulnerabilities, ethical hacking, and CTFs.",
      members: "13K+ members",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Trikaya Ambassadors",
      description: "Lead campus and city-level community growth.",
      members: "5K+ members",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Career Circle",
      description: "Peer mentoring, resume reviews, and interview prep.",
      members: "11K+ members",
    },
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: "Arjun Patel",
      points: 8540,
      badges: ["Helper", "Mentor", "Host"],
    },
    {
      rank: 2,
      name: "Sneha Reddy",
      points: 7890,
      badges: ["Contributor", "Helper"],
    },
    {
      rank: 3,
      name: "Vikram Singh",
      points: 7320,
      badges: ["Helper", "Host"],
    },
    {
      rank: 4,
      name: "Ananya Gupta",
      points: 6950,
      badges: ["Contributor", "Helper"],
    },
    {
      rank: 5,
      name: "Rohan Kumar",
      points: 6740,
      badges: ["Helper", "Mentor"],
    },
  ];

  const badges = [
    {
      icon: "/icons/pen.svg",
      title: "Community Helper",
    },
    {
      icon: "/icons/pen.svg",
      title: "Event Host",
    },
    {
      icon: "/icons/pen.svg",
      title: "Verified Contributor",
    },
  ];

  const experts = [
    {
      name: "Rajesh Kumar",
      title: "Software Engineer at Microsoft",
      quote:
        "Joined Trikaya AI Group → Landed Internship at Microsoft. The community support was incredible!",
      image: "/icons/rajesh.svg",
    },
    {
      name: "Meera Shah",
      title: "Blockchain Developer",
      description: "",
      image: "/images/Diya.jpg",
      quote:
        "From zero blockchain knowledge to building my first DApp in 3 months with Trikaya mentors.",
    },
    {
      name: "Karthik Iyer",
      title: "Community Organizer",
      quote:
        "Hosting Trikaya meetups helped me build leadership skills and connect with amazing people.",
      image: "/images/Arav.jpg",
    },
  ];

  return (
    <>
      <Banner
        title={"Learn Together. Build Together."}
        highlight={"Grow Together."}
        description="Join the Trikaya Community — where innovators, learners, and mentors collaborate on emerging technologies, share knowledge, and celebrate verified achievements."
        image="/community.png"
        primaryButton={{
          label: "Join the Community",
          href: "",
        }}
        secondaryButton={{
          label: "Explore Events",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Join the Trikaya "}
        highlight="Community?"
        containerClassName="my-11"
        description="Exclusive job opportunities and internships"
        cards={mentorCards}
        headingAlign={"left"}
      />
      <Container>
        <SectionHeader
          title={"Community"}
          highlight="Feed"
          description="Stay updated with posts, discussions, and announcements from across Trikaya."
        />
        <div className="my-11 space-y-4">
          {posts.map((p, i) => (
            <CommunityCard key={i} {...p} />
          ))}
        </div>

        <SectionHeader
          title={"Community"}
          highlight="Feed"
          description="Stay updated with posts, discussions, and announcements from across Trikaya."
        />
        <div className="grid grid-cols-1 gap-6 py-11 sm:grid-cols-2 lg:grid-cols-2">
          {data.map((item, i) => (
            <CommunityJoinCard key={i} {...item} />
          ))}
        </div>

        <SectionHeader
          title={"Upcoming Community "}
          highlight="Events"
          description="Attend online workshops, webinars, and city-level meetups hosted by Trikaya mentors and partners."
        />
        <>
          {EventsData?.data?.length ? (
            <div className="grid grid-cols-1 gap-x-[46px] gap-y-[27px] py-11 sm:grid-cols-2">

              {EventsData.data.map((item: EventsDataType) => (
                <GradientImageCardThree
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  buttonLabel={item.buttonLabel}
                  buttonLink={item.event_url}
                  bgImage={item.cover_photo_url}
                  date={formatEventWithDate(item.date_time, item.end_date_time)}
                  mode={mapCategoryToMode(item.event_mode)}
                  gradientFrom={item.gradientFrom}
                  gradientTo={item.gradientTo}
                  reverse={item.reverse}
                  className="h-[310px]"
                />
              ))}

            </div>
          ) : (
            <NotFound name="Upcoming Events" />
          )}
        </>

        <MeetupCallout
          title="Want to host a Trikaya Meetup?"
          subtitle="Organize events in your city and grow your leadership skills."
          buttonLabel="Apply as Organiser"
          buttonLink="#"
        />
        <SectionHeader
          title="Community "
          highlight="Leaderboard"
          description="Every contribution counts. Earn KP, badges, and verified recognition for helping others, completing labs, or hosting events."
        />
        <div className="my-11 space-y-2 rounded-[30px] bg-[#FAFAFA] md:p-6">
          {leaderboardData.map((item) => (
            <LeaderboardRow key={item.rank} {...item} />
          ))}
        </div>
        <GenericButton
          label="View Full Leadership"
          href="#"
          variant="primary"
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 pb-11 sm:grid-cols-3">
          {badges.map((b, index) => (
            <SkillCard
              key={index}
              icon={b.icon}
              title={b.title}
              className=""
            />
          ))}
        </div>
        <SectionHeader
          title="Community    "
          highlight="Highlights"
          description="Meet the learners and mentors shaping the Trikaya ecosystem."
        />
        <div className="mx-auto grid grid-cols-1 justify-items-center gap-[35px] py-11 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <GenericProfileCard
              key={index}
              {...expert}
              buttonText="Read Full Story"
            />
          ))}
        </div>
      </Container>
      <CallToAction
        title="Build Your Future with Trikaya"
        subtitle={
          <>Find the right opportunity. Get verified. Grow your career.</>
        }
        buttons={[
          { label: "Get Started Now", href: "#", variant: "secondary" },
        ]}
        showRocketBg={true}
      />
    </>
  );
}


