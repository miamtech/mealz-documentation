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
        id: "mobile",
        path: "docs/mobile",
        routeBasePath: "docs",
        sidebarPath: './docs/mobile/sidebars.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "5.1",
            path: "/"
          },
          "5.0": {
            banner: 'none',
          },
          "4.1": {
            banner: 'none',
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
        id: "web_sdk",
        path: "docs/web_sdk",
        routeBasePath: "docs/web_sdk",
        sidebarPath: './docs/web_sdk/sidebar.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        lastVersion: 'current',
        versions: {
          current: {
            label: "9.0",
            path: "/"
          },
          "8.8": {
            banner: 'none'
          },
          "8.7": {
            banner: 'none'
          },
          "8.6": {
            banner: 'none'
          },
          "8.5": {
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
            label: "1",
            path: "/"
          },
          "0": {
            banner: 'none'
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
          alt: "Mealz Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "Android",
            to: "docs/android/Introduction",
            items: [
              {
                label: "5.1",
                to: "docs/android/Introduction",
                activeBasePath: "docs/android/",
              },
              {
                label: "5.0",
                to: "docs/5.0/android/Introduction",
                activeBasePath: "docs/5.0/android/",
              },
              {
                label: "4.1",
                to: "docs/4.1/android/Introduction",
                activeBasePath: "docs/4.1/android/",
              },
              {
                label: "4.0",
                to: "docs/4.0/android/Introduction",
                activeBasePath: "docs/4.0/android/",
              },
              {
                label: "3.x",
                to: "docs/3/android/Introduction",
                activeBasePath: "docs/3/android/",
              }
            ]
          },
          {
            position: "left",
            label: "iOS",
            to: "docs/ios/Introduction",
            items: [
              {
                label: "5.1",
                to: "docs/ios/Introduction",
                activeBasePath: "docs/ios/",
              },
              {
                label: "5.0",
                to: "docs/5.0/ios/Introduction",
                activeBasePath: "docs/5.0/ios/",
              },
              {
                label: "4.1",
                to: "docs/4.1/ios/Introduction",
                activeBasePath: "docs/4.1/ios/",
              },
              {
                label: "4.0",
                to: "docs/4.0/ios/Introduction",
                activeBasePath: "docs/4.0/ios/",
              },
              {
                label: "3.x",
                to: "docs/3/ios/Introduction",
                activeBasePath: "docs/3/ios/",
              }
            ]
          },
          {
            position: "left",
            label: "Web SDK",
            to: "docs/web_sdk/Introduction",
            items: [
              {
                label: "9.0",
                to: "docs/web_sdk/Introduction",
                activeBaseRegex: "docs/web_sdk/[^0-9][^/]",
              },
              {
                label: "8.8",
                to: "docs/web_sdk/8.8/Introduction",
                activeBaseRegex: "docs/web_sdk/8.8",
              },
              {
                label: "8.7",
                to: "docs/web_sdk/8.7/Introduction",
                activeBaseRegex: "docs/web_sdk/8.7",
              },
              {
                label: "8.6",
                to: "docs/web_sdk/8.6/Introduction",
                activeBaseRegex: "docs/web_sdk/8.6",
              },
              {
                label: "8.5",
                to: "docs/web_sdk/8.5/Introduction",
                activeBaseRegex: "docs/web_sdk/8.5",
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
                label: "v1",
                to: "docs/web_ssr/Introduction",
                activeBaseRegex: "docs/web_ssr/[^0-9][^/]",
              },
              {
                label: "v0",
                to: "docs/web_ssr/0/Introduction",
                activeBasePath: "docs/web_ssr/0",
              },
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
