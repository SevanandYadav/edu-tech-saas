export interface School {
  id: string;
  name: string;
  displayName: string;
  location: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  features: string[];
}

export const schools: Record<string, School> = {
  'jj-english-medium-school-pune': {
    id: 'jj-english-medium-school-pune',
    name: 'jj-english-medium-school-pune',
    displayName: 'J.J. English Medium School',
    location: 'Pune',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    features: ['Student Portal', 'Online Classes', 'Assignments', 'Results', 'Fee Management']
  },
  'demo-school-mumbai': {
    id: 'demo-school-mumbai',
    name: 'demo-school-mumbai',
    displayName: 'Demo School',
    location: 'Mumbai',
    primaryColor: '#059669',
    secondaryColor: '#047857',
    features: ['Student Portal', 'Online Classes', 'Assignments', 'Results']
  }
};

export function getSchoolByName(name: string): School | null {
  return schools[name] || null;
}

export function getAllSchools(): School[] {
  return Object.values(schools);
}