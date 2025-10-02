import { getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

export default function DemoSchoolPage() {
  const school = getSchoolBySlug('demo');
  return <SchoolDashboard school={school} />;
}