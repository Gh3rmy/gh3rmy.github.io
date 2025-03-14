// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "es";
export const SITE_TAB = "Gh3rmy";
export const SITE_TITLE = "Gh3rmy - Blog";
export const SITE_DESCRIPTION = "Tech Blog Gh3rmy";
export const DATE_FORMAT = "ddd DD MMM YYYY";

// User profile information
export const USER_NAME = "Gh3rmy";
export const USER_SITE = "https://gh3rmy.github.io/";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://gh3rmy.github.io/";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Inicio", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  /*
  { id: "about", text: "Sobre mí", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  */
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "Todos",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      },
      // All blog
      {
        id: "publicaciones",
        text: "Publicaciones",
        href: "/blog/categories/Blog",
        svg: "mdi:fountain-pen-tip",
        target: "_self",
      }, // Writeup category
      {
        id: "writeup",
        text: "Writeups",
        href: "/blog/categories/writeup",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Writeup category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Proyectos",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  /*
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  */
  {
    id: "contact",
    text: "Contacto",
    href: "mailto:germanigrojas@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/Gh3rmy",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg: "ri:linkedin-line",
  },
  {
    href: "https://x.com/germanig11",
    ariaLabel: "X",
    title: "X",
    svg: "ri:twitter-x-line"
  }
];
