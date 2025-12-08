
export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.toLocaleString("en-US", { month: "long" });
  const endMonth = end.toLocaleString("en-US", { month: "long" });
  const startDay = start.getDate();
  const endDay = end.getDate();
  const year = start.getFullYear();

  // Example: March 15–17, 2025
  if (startMonth === endMonth && start.getFullYear() === end.getFullYear()) {
    return `${startMonth} ${startDay}–${endDay}, ${year}`;
  }

  // Example: March 30 – April 2, 2025
  if (start.getFullYear() === end.getFullYear()) {
    return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${year}`;
  }

  // Example: Dec 30, 2025 – Jan 2, 2026 (different years)
  return `${startMonth} ${startDay}, ${start.getFullYear()} – ${endMonth} ${endDay}, ${end.getFullYear()}`;
}

export function formatDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const diffMs = Math.max(0, end - start); // ensure no negative values

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    const remainingHours = hours % 24;
    return remainingHours > 0
      ? `${days} day${days > 1 ? "s" : ""} ${remainingHours} hour${remainingHours > 1 ? "s" : ""}`
      : `${days} day${days > 1 ? "s" : ""}`;
  }

  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`
      : `${hours} hour${hours > 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    return `${minutes} min`;
  }

  return `${seconds} sec`;
}


export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0, // remove decimal .00
  });
}


export function formatEventDate(isoDate: string) {
  return new Date(isoDate).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}



export function mapCategoryToMode(category?: string) {
  if (!category) return "Online";

  const cat = category.toLowerCase();

  if (cat === "webinar") return "Online";
  if (cat === "workshop") return "Hybrid";

  return category; // fallback
}


export function formatJobType(type: string): string {
  const mapping: Record<string, string> = {
    full_time: "Full-time",
    part_time: "Part-time",
    contract: "Contract",
    consultant: "Consultant",
    internship: "Internship",
    freelance: "Freelance",
    temporary: "Temporary",
  };

  return mapping[type] || type;
}