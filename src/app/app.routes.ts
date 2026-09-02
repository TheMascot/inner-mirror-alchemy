import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home')
      .then((m) => m.HomePage),
  },
  {
    path: 'adatkezeles',
    loadComponent: () => import('./pages/privacy_policy/privacy-policy')
      .then((m) => m.PrivacyPolicy),
  },
  {
    path: 'sutik',
    loadComponent: () => import('./pages/cookie_policy/cookie_policy')
      .then((m) => m.Cookie_policy),
  },
  {
    path: '**', loadComponent: () => import('./pages/not-found/not-found')
      .then((m) => m.NotFoundPage),
  },
];
