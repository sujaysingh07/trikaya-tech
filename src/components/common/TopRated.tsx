import GenericProfileCard from "../Cards/Generic-profile-card";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";
export const mentorsData = [
  {
    name: "Sarah Johnson",
    title: "Lead AI Engineer, Microsoft",
    image: "/images/mentors/sarah.jpg",
    isFeatured: true,
    showRating: true,
    rating: 4.9,
    buttonText: "Book Now",
  },
  {
    name: "Rahul Singh",
    title: "Lead AI Engineer, Microsoft",
    image: "/images/mentors/rahul.jpg",
    isFeatured: true,
    showRating: true,
    rating: 4.8,
    buttonText: "Book Now",
  },
  {
    name: "Emily Chen",
    title: "Data Science Lead, Google",
    image: "/images/mentors/emily.jpg",
    isFeatured: true,
    showRating: true,
    rating: 5.0,
    buttonText: "Book Now",
  },
  {
    name: "Michael Brown",
    title: "Cybersecurity Expert, Amazon",
    image: "/images/mentors/brown.jpg",
    isFeatured: true,
    showRating: true,
    rating: 4.9,
    buttonText: "Book Now",
  },
];

export default function TopRated() {
    return (
      <Container>
        <SectionHeader
          title="Top-Rated "
          highlight="Mentors"
          description="Meet our most sought-after mentors who've helped hundreds of learners achieve their goals."
        />

        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px] justify-items-center py-10">
          {mentorsData.map((mentor, index) => (
            <GenericProfileCard key={index} {...mentor} buttonText="Book Now" />
          ))}
        </div>
      </Container>
    );
}