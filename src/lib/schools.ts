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
}

export const schools: Record<string, School> = {
  'jj': {
    id: 'jj-english-medium-school-pune',
    name: 'jj-english-medium-school-pune',
    slug: 'jj',
    displayName: 'J.J. English Medium School',
    location: 'Pune',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    features: ['Student Portal', 'Online Classes', 'Assignments', 'Results', 'Fee Management']
  },
  'demo': {
    id: 'demo-school-mumbai',
    name: 'demo-school-mumbai',
    slug: 'demo',
    displayName: 'Demo School',
    location: 'Mumbai',
    primaryColor: '#059669',
    secondaryColor: '#047857',
    features: ['Student Portal', 'Online Classes', 'Assignments', 'Results']
  }
};

export function getSchoolBySlug(slug: string): School | null {
  return schools[slug] || null;
}

export function getAllSchools(): School[] {
  return Object.values(schools);
}