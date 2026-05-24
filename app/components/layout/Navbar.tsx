"use client";

import StaggeredMenu from "./StaggeredMenu";

export default function Navbar() {
  const menuItems = [
    { label: "HOME", ariaLabel: "Go to home page", link: "/" },
    { label: "ABOUT", ariaLabel: "Learn more about Strat Ai", link: "/about" },
    { label: "CAREERS", ariaLabel: "Explore career opportunities at Strat Ai", link: "/careers" },
    { label: "BLOG", ariaLabel: "Read Strat Ai engineering and quant blogs", link: "/blog" },
    { label: "PRICING", ariaLabel: "Platform pricing plans", link: "/#pricing" },
    { label: "CONTACT", ariaLabel: "Contact Strat Ai", link: "/contact" },
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
