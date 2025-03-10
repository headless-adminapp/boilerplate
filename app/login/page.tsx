'use client';

import { PageLogin } from '@headless-adminapp/fluent/components/PageLogin';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import { sessionResolver } from '../config/client/sessionResolver';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = useMemo(() => {
    if (typeof window === 'undefined') {
      return '/welcome';
    }

    const next = searchParams.get('next');

    if (!next) {
      return '/welcome';
    }

    return next;
  }, []);

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    sessionResolver()
      .then((session) => {
        if (session) {
          console.log('session', session, next);
          router.replace(nextRef.current);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <PageLogin
      logoImageUrl="/globe.svg"
      illustrationImageUrl="https://placehold.co/400x600?text=Welcome+Image"
      onLogin={async (username, password) => {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error('Unable to login');
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error);
        }

        router.replace(next);
      }}
    />
  );
}
