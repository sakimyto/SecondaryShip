import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { existsGaId, GA_ID } from '@/utils/gtag';

export const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: string) => {
      pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
