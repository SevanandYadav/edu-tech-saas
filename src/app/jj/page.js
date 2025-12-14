'use client';

import { useState, useEffect } from 'react';
import { loadSchoolData } from '@/lib/schools';
import SchoolDashboard from '@/components/SchoolDashboard';

export default function JJSchoolPage() {
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSchoolData('jj').then(schoolData => {
      setSchool(schoolData);
      if (schoolData) {
        document.title = schoolData.displayName;
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading school...</span>
        </div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h3>School not found</h3>
          <p>Unable to load school data.</p>
        </div>
      </div>
    );
  }

  return <SchoolDashboard school={school} />;
}