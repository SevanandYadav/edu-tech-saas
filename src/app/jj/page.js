import { getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

export default function JJSchoolPage() {
  const school = getSchoolBySlug('jj');
  return <SchoolDashboard school={school} />;
}