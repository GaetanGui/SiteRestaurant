import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const translateService = inject(TranslateService);
  
  if (!req.url.includes('/api/')) {
    return next(req);
  }

  const currentLang = translateService.currentLang || translateService.defaultLang || 'fr';

  console.log('Interceptor - Langue envoyée à API :', currentLang); // Pour débugger

  const clonedRequest = req.clone({
    setHeaders: {
      'Accept-Language': currentLang
    }
  });

  return next(clonedRequest);
};