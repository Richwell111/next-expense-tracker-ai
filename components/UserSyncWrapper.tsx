'use client';

import { useEffect } from 'react';

export function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Sync user to database when component mounts
    const syncUser = async () => {
      try {
        const response = await fetch('/api/auth/sync-user', {
          method: 'POST',
        });
        
        if (!response.ok) {
          console.error('Failed to sync user:', response.statusText);
        }
      } catch (error) {
        console.error('Error syncing user:', error);
      }
    };

    syncUser();
  }, []);

  return <>{children}</>;
}
