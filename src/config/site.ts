export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/project",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: [
    {
      text: 'Github',
      icon: 'pi pi-github',
      link: 'https://github.com/Yanyan02'
    },
    {
      text: 'Linkedin',
      icon: 'pi pi-linkedin',
      link: 'https://www.linkedin.com/in/marianne-mae-paclian-645b71278/'
    },
    {
      text: 'Discord',
      icon: 'pi pi-discord',
      link: 'https://discord.com/channels/@me/941531902131699772'
    },
    {
      text: 'Telegram',
      icon: 'pi pi-telegram',
      link: 'https://t.me/Yanyan022'
    },
  ],
};
