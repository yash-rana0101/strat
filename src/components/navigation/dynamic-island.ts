function initDynamicIsland() {
  const island = document.getElementById('dynamic-island');
  const toggle = document.getElementById('island-mobile-toggle');
  const expanded = document.getElementById('island-expanded');
  const statusText = document.getElementById('island-status');
  const menuIcon = toggle?.querySelector('.mobile-menu-icon');
  const closeIcon = toggle?.querySelector('.mobile-close-icon');

  if (!island || !toggle || !expanded) return;

  let isExpanded = false;

  // Toggle menu
  toggle.addEventListener('click', () => {
    isExpanded = !isExpanded;
    if (!isExpanded) {
      island.classList.remove('is-expanded');
      island.classList.remove('rounded-3xl');
      island.classList.add('rounded-full');
      island.style.maxHeight = '56px';
      toggle.setAttribute('aria-expanded', 'false');
      expanded.setAttribute('aria-hidden', 'true');
      expanded.style.maxHeight = '0px';
      expanded.style.opacity = '0';
      expanded.classList.add('border-transparent');
      expanded.classList.remove('border-hairline');
      
      closeIcon?.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
    } else {
      island.classList.add('is-expanded');
      island.classList.remove('rounded-full');
      island.classList.add('rounded-3xl');
      island.style.maxHeight = '550px';
      toggle.setAttribute('aria-expanded', 'true');
      expanded.setAttribute('aria-hidden', 'false');
      expanded.style.maxHeight = '480px';
      expanded.style.opacity = '1';
      expanded.classList.remove('border-transparent');
      expanded.classList.add('border-hairline');
      
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    }
  });

  // Close menu when a link is clicked
  const links = island.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      isExpanded = false;
      island.classList.remove('is-expanded');
      island.classList.remove('rounded-3xl');
      island.classList.add('rounded-full');
      island.style.maxHeight = '56px';
      toggle.setAttribute('aria-expanded', 'false');
      expanded.setAttribute('aria-hidden', 'true');
      expanded.style.maxHeight = '0px';
      expanded.style.opacity = '0';
      expanded.classList.add('border-transparent');
      expanded.classList.remove('border-hairline');
      
      closeIcon?.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
    });
  });

  // Scroll active section tracking (only active on homepage)
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '';
  if (isHomepage) {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = island.querySelectorAll('.island-nav-link');
    const mobileLinks = island.querySelectorAll('.mobile-nav-link');

    const activeDesktopClasses = ['bg-canvas', 'text-ink', 'shadow-sm'];
    const activeMobileClasses = ['text-ink', 'bg-surface-soft', 'font-semibold'];

    function updateActiveState(activeId: string) {
      if (statusText) {
        if (activeId === 'hero' || !activeId) {
          statusText.textContent = 'Strat AI';
        } else {
          statusText.textContent = activeId;
        }
      }

      navLinks.forEach((link) => {
        const sectionId = link.getAttribute('data-section');
        if (sectionId === activeId) {
          activeDesktopClasses.forEach(c => link.classList.add(c));
          link.classList.remove('text-muted');
        } else {
          activeDesktopClasses.forEach(c => link.classList.remove(c));
          link.classList.add('text-muted');
        }
      });

      mobileLinks.forEach((link) => {
        const sectionId = link.getAttribute('data-section');
        if (sectionId === activeId) {
          activeMobileClasses.forEach(c => link.classList.add(c));
          link.classList.remove('text-muted');
        } else {
          activeMobileClasses.forEach(c => link.classList.remove(c));
          link.classList.add('text-muted');
        }
      });
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            updateActiveState(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        updateActiveState('hero');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}

initDynamicIsland();
document.addEventListener('astro:after-swap', initDynamicIsland);
