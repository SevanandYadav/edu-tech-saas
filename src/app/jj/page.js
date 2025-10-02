import { getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

export const metadata = {
  title: 'J.J. English Medium School',
};

export default function JJSchoolPage() {
  const school = getSchoolBySlug('jj');
  return <SchoolDashboard school={school} />;
}