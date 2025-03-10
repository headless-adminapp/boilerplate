'use client';

import '@headless-adminapp/app/index.css';
import '@headless-adminapp/fluent/styles.css';
import 'react-quill/dist/quill.snow.css';
import { LayoutProvider } from '@headless-adminapp/fluent/App/LayoutProvider';
import { App } from '@headless-adminapp/fluent/App';
import { registerIconSet } from '@headless-adminapp/icons/register';
import { iconSet } from '@headless-adminapp/icons-fluent';
import { PropsWithChildren } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { appExperience } from '@/app/config/client/app';
import { clientSchemaStore } from '@/app/config/client/schemaStore';
import { clientExperienceStore } from '@/app/config/client/experienceStore';
import { sessionResolver } from '@/app/config/client/sessionResolver';
import { AuthProviderPlaceholder } from './AuthProviderPlaceholder';
import { useSystemColorScheme } from '@headless-adminapp/app/hooks/useSystemColorScheme';
import { webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { dataService } from '../config/client/dataService';

registerIconSet(iconSet);

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const systemColorScheme = useSystemColorScheme();
  const theme = systemColorScheme === 'dark' ? webDarkTheme : webLightTheme;

  return (
    <LayoutProvider
      theme={theme}
      routeProps={{
        router: router,
        pathname: pathname,
        searchParams: searchParams,
      }}
      metadataProps={{
        appExperience: appExperience,
        schemaStore: clientSchemaStore,
        experienceStore: clientExperienceStore,
      }}
      // Reference: https://headless-adminapp.github.io/docs/getting-started/configuration/client/data-service
      dataService={dataService}
      // Placeholder for AuthProvider when authentication in progress or not authenticated
      // Required only if authentication is enabled
      // Reference: https://headless-adminapp.github.io/docs/getting-started/configuration/client/authorization
      authPlaceholder={AuthProviderPlaceholder}
      // Props for AuthProvider
      // Required only if authentication is enabled
      // Reference: https://headless-adminapp.github.io/docs/getting-started/configuration/client/authorization
      authProps={{
        sessionResolver,
        onUnauthenticated: (reason) => {
          if (reason === 'logout') {
            // Clear token cookie

            document.cookie = 'token=; Path=/; Max-Age=0';
          }
        },
      }}
    >
      <App>{children}</App>
    </LayoutProvider>
  );
}
