'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  role: 'student' | 'parent' | 'teacher' | 'admin';
  displayName: string;
}

interface UserContextType {
  user: User | null;
  login: (username: string, role: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: string) => {
    const roleMap: Record<string, 'student' | 'parent' | 'teacher' | 'admin'> = {
      'Student Portal': 'student',
      'Parent Portal': 'parent', 
      'Teacher Portal': 'teacher',
      'Admin Panel': 'admin'
    };
    
    setUser({
      username,
      role: roleMap[role] || 'student',
      displayName: `Demo ${role.split(' ')[0]}`
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}