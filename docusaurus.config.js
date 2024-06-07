// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
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

  presets: [
    ['@docusaurus/preset-classic',
    
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
            type: "doc",
            docId: "android/Introduction",
            position: "left",
            label: "For Android",
          },
          {
            type: "doc",
            docId: "ios/Introduction",
            position: "left",
            label: "For iOS",
          },
          {
            type: "doc",
            docId: "web/Introduction",
            position: "left",
            label: "For Web",
          },
          { to: "https://en.mealz.ai/", label: "Enterprise", position: "left" },
          {
            type: "dropdown",
            label: "Versions", // The text to display for the dropdown
            position: "left", // Position in the navbar
            items: [
              {
                label: "iOS V3",
                to: "docs/ios/previous-versions/3/Introduction",
                activeBasePath: "docs/ios/previous-versions/3/",
              },
              {
                label: "iOS V4",
                to: "docs/ios/Introduction",
                activeBaseRegex: "docs\/ios\/(?!previous-versions)",
              },
              {
                label: "Android V3",
                to: "docs/android/previous-versions/3/Introduction",
                activeBasePath: "docs/android/previous-versions/3/",
              },
              {
                label: "Android V4",
                to: "docs/android/Introduction",
                activeBaseRegex: "docs\/android\/(?!previous-versions)",
              },
              {
                label: "Web V8",
                to: "docs/web/Introduction",
                activeBasePath: "docs/web/",
              },
            ],
          },
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
                label: "Web",
                to: "docs/web/Introduction",
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

module.exports = config;
