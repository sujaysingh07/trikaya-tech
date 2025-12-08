export type APIResponse<T> = {
  data: T;
  message: string;
  status: string;
};


export type AssignmentDataType = {
    Assignment:AssignmentType[];
}

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
}

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
};

export type EventsDataType = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  event_url: string;
  cover_photo_url: string;
  registration_deadline: string;
  event_mode: string;
  category:string;
  gradientFrom?: string;
  gradientTo?: string;
  reverse?: boolean;
  end_date_time:string;
  date_time:string;
}

 