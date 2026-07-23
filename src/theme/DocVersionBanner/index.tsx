import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import DocVersionBannerOriginal from '@theme-original/DocVersionBanner';
import type {Props} from '@theme/DocVersionBanner';
import {useActivePlugin, useDocsVersion} from '@docusaurus/plugin-content-docs/client';
import {ThemeClassNames} from '@docusaurus/theme-common';

export default function DocVersionBanner(props: Props): ReactNode {
  const versionMetadata = useDocsVersion();
  const activePlugin = useActivePlugin({failfast: false});

  if (
    activePlugin?.pluginId === 'web_sdk' &&
    versionMetadata.banner === 'unmaintained'
  ) {
    return (
      <div
        className={clsx(
          ThemeClassNames.docs.docVersionBanner,
          'alert alert--warning margin-bottom--md',
        )}
        role="alert">
        <div>
          This is documentation for <strong>Web SDK {versionMetadata.label}</strong>,
          which is in maintenance mode from August 2026 (critical fixes only).
        </div>
        <div className="margin-top--md">
          For new integrations, use the{' '}
          <strong>
            <Link to="docs/web_ssr/introduction">Web SSR documentation (v3)</Link>
          </strong>
          . If you are upgrading from the Web SDK, see the{' '}
          <Link to="docs/web_ssr/migration-v2-v3">
            V2 to V3 migration guide
          </Link>
          .
        </div>
      </div>
    );
  }

  return <DocVersionBannerOriginal {...props} />;
}
