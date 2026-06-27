import type { NavigationItem, NavigationGroup } from '@/types/navigation';

export const NAV_ITEMS: NavigationItem[] = [
  {
    label: 'Products',
    href: '/#features',
    dropdownItems: [
      { label: 'Strat AI Terminal', desc: 'AI-powered F&O and Crypto trading intelligence', href: '/#features' },
      { label: 'How It Works', desc: '5 ML agents fused into one conviction score', href: '/#how-it-works' },
      { label: 'Download', desc: 'Get Strat Ai on Web, Android, and iOS', href: '/download' },
    ],
  },
  {
    label: 'Pricing',
    href: '/#pricing',
  },
  {
    label: 'Resources',
    href: '/docs',
    dropdownItems: [
      { label: 'Documentation', desc: 'Guides, tutorials, and core concepts', href: '/docs' },
      { label: 'API Reference', desc: 'REST and WebSocket API docs', href: '/api-reference' },
      { label: 'Blog', desc: 'Research, engineering, and trading insights', href: '/blog' },
      { label: 'Changelog', desc: 'Product updates and release history', href: '/changelog' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    dropdownItems: [
      { label: 'About Strat Ai', desc: 'Our mission to obliterate information asymmetry', href: '/about' },
      { label: 'Careers', desc: 'Join our team of engineers and quants', href: '/careers' },
      { label: 'Contact Us', desc: 'Get in touch for partnerships and access', href: '/contact' },
      { label: 'System Status', desc: 'Real-time service health monitoring', href: '/status' },
    ],
  },
];

export const FOOTER_GROUPS: NavigationGroup[] = [
  {
    title: 'Platform',
    items: [
      { label: 'Features', href: '/#features' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Download App', href: '/download' },
      { label: 'System Status', href: '/status' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api-reference' },
      { label: 'Blog', href: '/blog' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
];
