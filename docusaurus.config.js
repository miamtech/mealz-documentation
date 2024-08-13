// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


export default {
  title: "Mealz Documentation",
  tagline: "Mealz for native iOS, Android and Web apps",
  favicon: "img/favicon.ico",
  url: "https://miamtech.github.io/",
  baseUrl: "/mealz-documentation/",
  organizationName: "miamtech",
  projectName: "mealz-documentation",
  deploymentBranch: "main",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-pages",
      { }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "android",
        path: "docs/android",
        routeBasePath: "docs/android",
        sidebarPath: './docs/android/sidebar.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "4.1",
            path: "/"
          },
          "4.0": {
            banner: 'none'
          },
          "3": {
            label: "3.x",
            banner: 'unmaintained'
          }
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ios",
        path: "docs/ios",
        routeBasePath: "docs/ios",
        sidebarPath: 'docs/ios/sidebar.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "4",
            path: "/"
          },
        }
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web_sdk",
        path: "docs/web_sdk",
        routeBasePath: "docs/web_sdk",
        sidebarPath: './docs/web_sdk/sidebar.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "8.5",
            path: "/"
          },
          "8.4": {
            banner: 'none'
          },
          "8.3": {
            banner: 'none'
          }
        }
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web_ssr",
        path: "docs/web_ssr",
        routeBasePath: "docs/web_ssr",
        sidebarPath: './docs/web_ssr/sidebar.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "1.0",
            path: "/"
          },
        }
      },
    ],
    [
      "@docusaurus/theme-classic",
      {
        customCss: './src/css/custom.css',
      },
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      prism: {
        additionalLanguages: ["kotlin", "java", "gradle", "swift"],
      },
      navbar: {
        style: "dark",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "Android",
            to: "docs/android/Introduction",
            items: [
              {
                label: "4.1",
                to: "docs/android/Introduction",
                activeBaseRegex: "docs\/android\/[^0-9][^/]",
              },
              {
                label: "4.0",
                to: "docs/android/4.0/Introduction",
                activeBasePath: "docs/android/4.0/",
              },
              {
                label: "3.x",
                to: "docs/android/3/Introduction",
                activeBasePath: "docs/android/3/",
              }
            ]
          },
          {
            position: "left",
            label: "iOS",
            to: "docs/ios/Introduction",
            items: [
              {
                label: "V4",
                to: "docs/ios/Introduction",
                activeBaseRegex: "docs\/ios\/[^0-9][^/]",
              },
              {
                label: "V3",
                to: "docs/ios/3/Introduction",
                activeBasePath: "docs/ios/3/",
              }
            ]
          },
          {
            position: "left",
            label: "Web SDK",
            to: "docs/web_sdk/Introduction",
            items: [
              {
                label: "8.5",
                to: "docs/web_sdk/Introduction",
                activeBaseRegex: "docs/web_sdk/[^0-9][^/]",
              },
              {
                label: "8.4",
                to: "docs/web_sdk/8.4/Introduction",
                activeBasePath: "docs/web_sdk/8.4",
              },
              {
                label: "8.3",
                to: "docs/web_sdk/8.3/Introduction",
                activeBasePath: "docs/web_sdk/8.3",
              },
            ]
          },
          {
            position: "left",
            label: "Web SSR",
            to: "docs/web_ssr/Introduction",
            items: [
              {
                label: "1.0",
                to: "docs/web_ssr/Introduction",
                activeBaseRegex: "docs/web_ssr/[^0-9][^/]",
              }
            ]
          },
          { to: "https://en.mealz.ai/", label: "Enterprise", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Android",
                to: "docs/android/Introduction",
              },
              {
                label: "iOS",
                to: "docs/ios/Introduction",
              },
              {
                label: "Web SDK",
                to: "docs/web_sdk/Introduction",
              },
              {
                label: "Web SSR",
                to: "docs/web_ssr/Introduction",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/miamtech/mealz-documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mealz, Inc. Built with Docusaurus.`,
      },
    }),
};

// module.exports = config;
