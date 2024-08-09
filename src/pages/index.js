import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.miamBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="miam_button_row">
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/android/Introduction">
              Android 🤖
            </Link>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/ios/Introduction">
              iOS 🍏
            </Link>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/web_sdk/Introduction">
              Web SDK 🌐
            </Link>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/web_ssr/Introduction">
              Web SSR ☁️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
