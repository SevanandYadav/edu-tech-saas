import { notFound } from 'next/navigation';
import { getSchoolByName } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function SchoolPage({ params }: PageProps) {
  const { name } = await params;
  const school = getSchoolByName(name);

  if (!school) {
    notFound();
  }

  return <SchoolDashboard school={school} />;
}

export async function generateStaticParams() {
  return [
    { name: 'jj-english-medium-school-pune' },
    { name: 'demo-school-mumbai' }
  ];
}