"use client";

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { UserProvider } from '../context/UserContext';
import './globals.css';
import { ReactNode, useState } from 'react';
import NavBar from '../components/NavBar'; 

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <title>User Management</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <NavBar /> {}
          <UserProvider>
            {children}
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
