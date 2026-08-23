export interface NavItem {
  label: string;
  routerLink: string;
  fragment?: string;
}

export const siteConfig = {
  name: 'Belső Tükör Alkímiája',
  author: 'Szita Viola',
  tagline: 'Iránytű a lélek térképén',
  description:
    'Párkapcsolati önismeret, asztrológia és Csung Jüan Csikung – hogy ne csak azt kérdezd, ki lesz melletted, hanem azt is, hogy miért.',
  facebookGroupUrl: 'https://www.facebook.com/groups/397356286567851/',
  facebookPrivateUrl: 'https://www.facebook.com/viola.szita',
  contactEmail: {user: 'szitaviola', sing: '@', domain: 'google.com'},
  nav: [
    { label: 'Ismerős?', routerLink: '/', fragment: 'ismeros' },
    { label: 'A módszer', routerLink: '/', fragment: 'modszer' },
    { label: 'Rólam', routerLink: '/', fragment: 'rolam'},
    { label: 'Kapcsolat', routerLink: '/', fragment: 'kapcsolat' },
  ] as NavItem[],
  headerCta: {
    label: 'Belépek a csoportba',
    routerLink: '/',
    fragment: 'csoport',
  },
} as const;
