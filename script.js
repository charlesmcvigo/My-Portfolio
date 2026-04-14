const portfolioData = {
  site: {
    title: "C.VIGO",
    tagline: "Developer & Designer",
    resumeUrl: "#",
    navItems: [
      { text: "Home", href: "#home" },
      { text: "About", href: "#about" },
      { text: "Projects", href: "#projects" },
      { text: "Contact", href: "#contact" },
    ],
  },
  hero: {
    name: "Charles Mc Vigo",
    intro:
      "Welcome to my personal portfolio website. Here you can find information about me, my projects, and how to contact me.",
    image: "images/Me-removebg-preview.png",
    actions: [
      { label: "Contact Me", href: "#contact", primary: true },
      { label: "View Projects", href: "#projects", primary: false },
    ],
  },
  socials: [
    {
      label: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/chaaa.rlss/",
    },
    {
      label: "Facebook",
      icon: "fa-facebook",
      url: "https://web.facebook.com/CharlesMcVigo",
    },
    {
      label: "LinkedIn",
      icon: "fa-linkedin",
      url: "https://www.linkedin.com/in/charles-mc-vigo-abb6a8363/",
    },
  ],
  about: [
    "I am a passionate web developer who builds clean and responsive digital experiences.",
    "My work is focused on delivering polished interfaces, thoughtful user experiences, and scalable code." ,
    "This portfolio is structured so you can easily add new sections, features, and projects as your skills grow.",
  ],
  projects: [
    {
      title: "Portfolio Redesign",
      description: "A responsive portfolio website built with modular HTML, CSS, and JavaScript for easy growth.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "#projects",
    },
    {
      title: "Custom Feature Roadmap",
      description: "A framework for adding future portfolio features like testimonials, blog posts, and interactive demos.",
      tags: ["Planning", "UI", "UX"],
      url: "#about",
    },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+639955093733",
    viber: "+639955093733",
  },
  theme: {
    current: "dark",
    icons: {
      dark: "fa-moon",
      light: "fa-sun",
    },
  },
};

const select = (selector) => document.querySelector(selector);

function renderNavigation() {
  const navList = select("#nav-list");
  navList.innerHTML = portfolioData.site.navItems
    .map(
      (item) =>
        `<li><a href="${item.href}" data-href="${item.href}">${item.text}</a></li>`
    )
    .join("");

  const links = navList.querySelectorAll("a");
  const navToggle = select("#nav-toggle");
  const pageNav = select(".page-nav");
  const navIcon = navToggle.querySelector("i");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((node) => node.classList.remove("active"));
      link.classList.add("active");

      if (pageNav.classList.contains("open")) {
        pageNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navIcon.className = "fa-solid fa-bars";
      }
    });
  });

  navToggle.addEventListener("click", () => {
    const isOpen = pageNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navIcon.className = `fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`;
  });

  if (!navList.querySelector(".active")) {
    links[0]?.classList.add("active");
  }
}

function renderHero() {
  select("#brand-link").textContent = portfolioData.site.title;
  select("#brand-tagline").textContent = portfolioData.site.tagline;
  select("#resume-link").href = portfolioData.site.resumeUrl;
  select("#my-name").textContent = `I'm ${portfolioData.hero.name}`;
  select("#my-intro").textContent = portfolioData.hero.intro;
  select(".hero-image img").src = portfolioData.hero.image;
  select(".hero-image img").alt = `${portfolioData.hero.name} profile image`;

  const heroActions = document.querySelector(".hero-actions");
  heroActions.innerHTML = portfolioData.hero.actions
    .map(
      (action) =>
        `<a class="button ${action.primary ? "button-primary" : "button-outline"}" href="${action.href}">${action.label}</a>`
    )
    .join("");
}

function renderSocialLinks() {
  const socialLinks = select("#social-links");
  socialLinks.innerHTML = portfolioData.socials
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.label}"><i class="fa-brands ${link.icon}"></i></a>`
    )
    .join("");
}

function renderAbout() {
  const aboutContent = select("#about-content");
  aboutContent.innerHTML = portfolioData.about
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function renderProjects() {
  const projectList = select("#project-list");
  projectList.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
          <a class="button button-outline" href="${project.url}">Learn more</a>
        </article>
      `
    )
    .join("");
}

function renderContact() {
  select("#contact-email").textContent = portfolioData.contact.email;
  select("#contact-email").href = `mailto:${portfolioData.contact.email}`;
  select("#contact-phone").textContent = portfolioData.contact.phone;
  select("#viber-number").textContent = portfolioData.contact.viber;
  select("#contact-mailto").href = `mailto:${portfolioData.contact.email}`;
  select("#resume-link-mobile").href = portfolioData.site.resumeUrl;
}

function setupThemeToggle() {
  const themeToggles = document.querySelectorAll(".theme-toggle-btn");

  function updateTheme() {
    document.documentElement.dataset.theme = portfolioData.theme.current;
    themeToggles.forEach((button) => {
      const icon = button.querySelector("i");
      icon.className = `fa-solid ${portfolioData.theme.icons[portfolioData.theme.current]}`;
    });
  }

  themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
      portfolioData.theme.current = portfolioData.theme.current === "dark" ? "light" : "dark";
      updateTheme();
    });
  });

  updateTheme();
}

function initPortfolio() {
  renderNavigation();
  renderHero();
  renderSocialLinks();
  renderAbout();
  renderProjects();
  renderContact();
  setupThemeToggle();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
