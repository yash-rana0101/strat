import type { NavigationItem, NavigationGroup } from '@/types/navigation';

export const NAV_ITEMS: NavigationItem[] = [
  {
    label: 'Products',
    href: '/#features',
    dropdownItems: [
      { label: 'Strat AI Terminal', desc: 'F&O trading intelligence and analysis', href: '/#features' },
      { label: 'How It Works', desc: 'Advanced multi-variable conviction scoring', href: '/#how-it-works' },
      { label: 'Download', desc: 'Get Strat Ai on Web and Desktop', href: '/download' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
    dropdownItems: [
      { label: 'Plans & Credits', desc: 'Flexible credit-based plans', href: '/pricing' },
      { label: 'Refund Policy', desc: 'Our 7-day refund policy details', href: '/refund' },
      { label: 'Terms of Service', desc: 'Terms of service and usage rules', href: '/terms' },
      { label: 'Disclaimer', desc: 'Legal and financial disclosures', href: '/disclaimer' },
    ],
  },
  {
    label: 'Resources',
    href: '/docs',
    dropdownItems: [
      { label: 'Documentation', desc: 'Guides, tutorials, and terminal concepts', href: '/docs' },
      { label: 'API Reference', desc: 'Integration API documentation', href: '/api-reference' },
      { label: 'Blog', desc: 'Market insights, strategies, and research', href: '/blog' },
      { label: 'Changelog', desc: 'Product updates and feature history', href: '/changelog' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    dropdownItems: [
      { label: 'About Strat Ai', desc: 'Built by the Trading and Research Wing', href: '/about' },
      { label: 'Careers', desc: 'Join our research and trading team', href: '/careers' },
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
      { label: 'Pricing', href: '/pricing' },
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
