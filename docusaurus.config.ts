import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // 1. 사이트 기본 정보 수정
  title: 'AI 인프라 구축 위키', // [수정] 사이트 제목
  tagline: '백엔드 개발자의 AI 상식사전 학습 & 인프라 구축 로그', // [수정] 한 줄 소개
  favicon: 'img/favicon.ico',

  // 2. 배포 URL 설정 (GitHub Pages 필수 설정!)
  url: 'https://ChoysProject.github.io', // [수정] 예: https://choys.github.io
  baseUrl: '/AI_Docusaurus/', // [수정] 리포지토리 이름 (앞뒤로 / 필수)

  // 3. GitHub 배포 설정
  organizationName: 'ChoysProject', // [수정] GitHub User ID
  projectName: 'AI_Docusaurus', // [수정] GitHub Repository Name
  deploymentBranch: 'gh-pages', // 배포 브랜치 명시
  trailingSlash: false, // 경로 에러 방지용

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko', // [수정] 한국어로 변경
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // "이 페이지 수정하기" 링크 제거 (개인 블로그라 불필요)
          // editUrl: 'https://github.com/...', 
        },
        blog: {
          showReadingTime: true,
          // 블로그 기능은 일단 둡니다
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
      title: 'AI Infra Wiki', // [수정] 왼쪽 상단 로고 옆 텍스트
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'AI 학습노트', // [수정] 메뉴 이름 변경
        },
        {to: '/blog', label: '개발일기', position: 'left'}, // [수정] Blog -> 개발일기
        {
          href: 'https://github.com/ChoysProject/AI_Docusaurus', // [수정] 내 리포지토리로 링크 변경
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
              label: 'AI 학습노트',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
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