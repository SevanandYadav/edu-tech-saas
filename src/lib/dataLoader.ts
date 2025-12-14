export interface School {
  id: string;
  name: string;
  slug: string;
  displayName: string;
  location: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  features: string[];
  contact?: {
    email: string;
    phone: string;
    address: string;
  };
}

// GitHub raw content URL for data branch
const DATA_BRANCH_URL = 'https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data';

// Minimal fallback for known school slugs
const KNOWN_SCHOOLS = ['jj', 'demo'];

let schoolsCache: Record<string, School> | null = null;

export async function loadSchoolData(slug: string): Promise<School | null> {
  try {
    const response = await fetch(`${DATA_BRANCH_URL}/data/schools/${slug}/config/school.json`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn(`Failed to load school data for ${slug} from data branch:`, error);
  }
  return null;
}

export async function loadAllSchools(): Promise<School[]> {
  if (schoolsCache) {
    return Object.values(schoolsCache);
  }

  const schools: Record<string, School> = {};
  
  // Load all known schools from data branch
  for (const slug of KNOWN_SCHOOLS) {
    const school = await loadSchoolData(slug);
    if (school) {
      schools[slug] = school;
    }
  }
  
  schoolsCache = schools;
  return Object.values(schools);
}

// Synchronous functions for backward compatibility (will be deprecated)
export function getSchoolBySlug(slug: string): School | null {
  console.warn('getSchoolBySlug is deprecated, use loadSchoolData instead');
  return null;
}

export function getAllSchools(): School[] {
  console.warn('getAllSchools is deprecated, use loadAllSchools instead');
  return [];
}