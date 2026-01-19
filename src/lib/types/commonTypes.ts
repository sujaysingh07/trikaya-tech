export type APIResponse<T> = {
  data: T;
  message: string;
  status: string;
};

export type AssignmentDataType = {
  Assignment: AssignmentType[];
};

export type AssignmentType = {
  id: string;
  title: string;
  description: string;
  points: string;
  category: string;
  created_at: string;
  assignment_url: string;
  bgImage?: string;
  tasks?: string;
  gradientFrom?: string;
  gradientTo?: string;
  textColor?: "light" | "dark";
  reverse?: boolean;
  buttonLabel?: string;
};

export type WeeklyChallengeAPIItem = {
  id: string;
  index: number;
  title: string;
  description: string;
  points: string;
  image: string;
  duration: string;
  category: string;
  challenge_url: string;
};

export type HackathonDataType = {
  title: string;
  short_description: string;
  organizer_name: string;
  organizer_logo: string | null;
  organizer_website: string;
  theme: string;
  category: string;
  hackathon_start_date: string;
  hackathon_end_date: string;
  total_prize_pool: number;
  registration_url: string;
};

export interface HackathonCardProps {
  key?: number;
  hackathon: HackathonDataType;
}

export type QuestDataType = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  points: number;
  duration: number;
  quests_url: string;
};

export interface QuestDataProps {
  quest: QuestDataType;
}

export type EventsDataType = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  event_url: string;
  cover_photo_url: string;
  registration_deadline: string;
  event_mode: string;
  category: string;
  gradientFrom?: string;
  gradientTo?: string;
  reverse?: boolean;
  end_date_time: string;
  date_time: string;
};

export interface JobDetailstype {
  company_logo: string ;
  og_image: string;
  title: string;
  company_name: string;
  company_url: string;
  description: string;
  requirements: null;
  responsibilities: null;
  benefits: null;
  skills_required: null;
  skills_preferred: null;
  location: string;
  work_type: string;
  employment_type: string;
  experience_level: string;
  min_experience: number;
  max_experience: number;
  salary_min: number;
  salary_max: number;
  salary_currency: string;
  department: string;
  application_start_date: Date;
  application_deadline: Date;
  posted_on: Date;
  registration_url: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}
