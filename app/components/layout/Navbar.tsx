"use client";

import StaggeredMenu from "./StaggeredMenu";

export default function Navbar() {
  const menuItems = [
    { label: "PLATFORM", ariaLabel: "Platform Features", link: "#features" },
    { label: "WORKING", ariaLabel: "How it works step by step", link: "#how-it-works" },
    { label: "PRICING", ariaLabel: "Platform pricing plans", link: "#pricing" },
    { label: "FAQ", ariaLabel: "Frequently Asked Questions", link: "#faq" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="var(--text-primary)"
      openMenuButtonColor="var(--text-primary)"
      changeMenuColorOnOpen={false}
      colors={["#0B0F17", "#1E2A3A", "#10B981"]}
      accentColor="var(--accent-primary)"
      isFixed={true}
    />
  );
}
