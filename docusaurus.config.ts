import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // 1. 사이트 기본 정보
  title: 'AI 인프라 구축 위키',
  tagline: '백엔드 개발자의 AI 상식사전 학습 & 인프라 구축 로그',
  favicon: 'img/favicon.ico',

  // 2. GitHub Pages 배포 설정 (ChoysProject님 설정 유지)
  url: 'https://ChoysProject.github.io',
  baseUrl: '/AI_Docusaurus/', 
  organizationName: 'ChoysProject', 
  projectName: 'AI_Docusaurus', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // 3. 에러 핸들링 (warn 유지)
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  // 4. 언어 설정
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AI Infra Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // [1] AI 상식사전
        {
          type: 'doc', 
          position: 'left',
          // [수정] 01-ai-dictionary/intro -> ai-dictionary/intro
          docId: 'ai-dictionary/intro', 
          label: 'AI 상식사전',
        },
        // [2] AI 인프라
        {
          type: 'doc',
          position: 'left',
          // [수정] 02-ai-infra/intro -> ai-infra/intro
          docId: 'ai-infra/intro',
          label: 'AI 인프라',
        },
        // [3] AI 공부
        {
          type: 'doc',
          position: 'left',
          // [수정] 03-ai-study/intro -> ai-study/intro
          docId: 'ai-study/intro',
          label: 'AI 공부',
        },
        // [4] 공통
        {
          type: 'doc',
          position: 'left',
          // [수정] 04-common/intro -> common/intro
          docId: 'common/intro',
          label: '공통',
        },        // [5] 개발일지 (블로그)
        {
          to: '/blog', 
          label: '개발일지', 
          position: 'left'
        },
        // [우측] 깃허브 링크
        {
          href: 'https://github.com/ChoysProject/AI_Docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'AI 상식사전',
              to: '/docs/01-ai-dictionary/intro',
            },
            {
              label: 'AI 인프라',
              to: '/docs/02-ai-infra/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '개발일지',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ChoysProject/AI_Docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ChoYoungSang. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;