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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

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
            label: "5.7",
            path: "/"
          },
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
            label: "9.2",
            path: "/",
            banner: 'unmaintained'
          },
          "9.1": {
            banner: 'none'
          },
          "9.0": {
            banner: 'none'
          },
          "8.8": {
            banner: 'none'
          },
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
            label: "v3",
            path: "/"
          },
          "v2": {
            banner: 'unmaintained'
          },
          "v1": {
            banner: 'unmaintained'
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
          },
          {
            position: "left",
            label: "iOS",
            to: "docs/ios/Introduction",
          },
          {
            position: "left",
            label: "Web SDK",
            to: "docs/web_sdk/Introduction",
            items: [
              {
                label: "9.2",
                to: "docs/web_sdk/Introduction",
                activeBaseRegex: "docs/web_sdk/[^0-9][^/]",
              },
              {
                label: "9.1",
                to: "docs/web_sdk/9.1/Introduction",
                activeBaseRegex: "docs/web_sdk/9.1",
              },
              {
                label: "9.0",
                to: "docs/web_sdk/9.0/Introduction",
                activeBaseRegex: "docs/web_sdk/9.0",
              },
              {
                label: "8.8",
                to: "docs/web_sdk/8.8/Introduction",
                activeBaseRegex: "docs/web_sdk/8.8",
              },
            ]
          },
          {
            position: "left",
            label: "Web SSR",
            to: "docs/web_ssr/introduction",
            items: [
              {
                label: "v3",
                to: "docs/web_ssr/introduction",
                activeBaseRegex: "docs/web_ssr/[^0-9][^/]",
              },
              {
                label: "v2",
                to: "docs/web_ssr/v2/introduction",
                activeBasePath: "docs/web_ssr/v2",
              },
              {
                label: "v1",
                to: "docs/web_ssr/v1/introduction",
                activeBasePath: "docs/web_ssr/v1",
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
                to: "docs/web_ssr/introduction",
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
