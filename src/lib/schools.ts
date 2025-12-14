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

const DATA_BRANCH_URL = process.env.NEXT_PUBLIC_DATA_BRANCH_URL || 'https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data';
const KNOWN_SCHOOLS = ['jj', 'demo'];

export async function loadSchoolData(slug: string): Promise<School | null> {
  try {
    const url = `${DATA_BRANCH_URL}/data/schools/${slug}/config/school.json`;
    console.log(`Loading school data from: ${url}`);
    const response = await fetch(url);
    console.log(`Response status for ${slug}:`, response.status);
    if (response.ok) {
      const data = await response.json();
      console.log(`Loaded school data for ${slug}:`, data);
      return data;
    } else {
      console.error(`Failed to load ${slug}: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error loading school data for ${slug}:`, error);
  }
  return null;
}

export async function loadAllSchools(): Promise<School[]> {
  console.log('Loading all schools...');
  const schools: School[] = [];
  for (const slug of KNOWN_SCHOOLS) {
    console.log(`Loading school: ${slug}`);
    const school = await loadSchoolData(slug);
    if (school) {
      schools.push(school);
      console.log(`Successfully loaded: ${school.displayName}`);
    } else {
      console.warn(`Failed to load school: ${slug}`);
    }
  }
  console.log('Final schools array:', schools);
  return schools;
}