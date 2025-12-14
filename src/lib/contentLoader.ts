const DATA_BRANCH_URL = process.env.NEXT_PUBLIC_DATA_BRANCH_URL || 'https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data';

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  category: string;
}

export interface EventItem {
  date: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface PrincipalMessage {
  message: string;
  name: string;
}

export interface QuickLink {
  title: string;
  icon: string;
  description: string;
  link: string;
}

export interface AdmissionData {
  title: string;
  description: string;
  requirements: string[];
  importantDates: {
    applicationStart: string;
    applicationDeadline: string;
    admissionTest: string;
  };
  quickActions: {
    title: string;
    type: string;
    action?: string;
    link: string;
  }[];
}

let contentCache: Record<string, any> = {};

export async function loadContent<T>(schoolSlug: string, contentType: string): Promise<T | null> {
  const cacheKey = `${schoolSlug}-${contentType}`;
  if (contentCache[cacheKey]) {
    return contentCache[cacheKey];
  }

  try {
    const response = await fetch(`${DATA_BRANCH_URL}/data/schools/${schoolSlug}/content/${contentType}.json`);
    if (response.ok) {
      const content = await response.json();
      contentCache[cacheKey] = content;
      return content;
    }
  } catch (error) {
    console.warn(`Failed to load ${contentType} for ${schoolSlug}:`, error);
  }
  
  return null;
}

export async function loadSchoolNews(schoolSlug: string): Promise<NewsItem[]> {
  return (await loadContent<NewsItem[]>(schoolSlug, 'news')) || [];
}

export async function loadSchoolEvents(schoolSlug: string): Promise<EventItem[]> {
  return (await loadContent<EventItem[]>(schoolSlug, 'events')) || [];
}

export async function loadSchoolTestimonials(schoolSlug: string): Promise<TestimonialItem[]> {
  return (await loadContent<TestimonialItem[]>(schoolSlug, 'testimonials')) || [];
}

export async function loadSchoolNotifications(schoolSlug: string): Promise<string[]> {
  return (await loadContent<string[]>(schoolSlug, 'notifications')) || [];
}

export async function loadPrincipalMessage(schoolSlug: string): Promise<PrincipalMessage | null> {
  return await loadContent<PrincipalMessage>(schoolSlug, 'principal');
}

export async function loadQuickLinks(schoolSlug: string, userRole: string): Promise<QuickLink[]> {
  const allLinks = await loadContent<Record<string, QuickLink[]>>(schoolSlug, 'quick-links');
  return allLinks?.[userRole.toUpperCase()] || [];
}

export async function loadAdmissionData(schoolSlug: string): Promise<AdmissionData | null> {
  return await loadContent<AdmissionData>(schoolSlug, 'admission');
}