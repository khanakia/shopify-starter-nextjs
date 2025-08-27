'use client';
import useAppBridge from '@/lib/shopify/app-bridge';
// import { useAppBridge } from '@shopify/app-bridge-react';
import { useEffect } from 'react';
import { doServerAction, storeToken } from '../action';

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const app = useAppBridge();

  useEffect(() => {
    // console.log('app', app.idToken());
    app
      .idToken()
      .then(async (token) => {
        console.log('Token', token);
        const response = await doServerAction(token);
        console.log('Response', response);
        storeToken(token)
          .then(() => {
            console.log('Token stored');
          })
          .catch((error) => {
            console.error('Error storing token', error);
          });
      })
      .catch((error) => {
        console.error('Error getting token', error);
      });
  }, [app]);

  return <>{children}</>;
}
