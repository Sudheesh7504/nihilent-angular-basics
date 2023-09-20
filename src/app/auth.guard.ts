import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const getToken = localStorage.getItem('token') || 'false';
  const auth = JSON.parse(getToken) as boolean;

  if (auth == false) {
    router.navigate(['/home']);
  }

  return auth;
};
