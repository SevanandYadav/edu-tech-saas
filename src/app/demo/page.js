import { getSchoolBySlug } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

export const metadata = {
  title: 'Demo School',
};

export default function DemoSchoolPage() {
  const school = getSchoolBySlug('demo');
  return <SchoolDashboard school={school} />;
}