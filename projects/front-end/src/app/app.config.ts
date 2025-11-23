import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomOverlayContainer } from './ToolBox/CustomOverlayContainer';
import { OverlayContainer } from '@angular/cdk/overlay';
import { languageInterceptor } from './core/interceptors/langugage.interceptors';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDebugTracing()), 
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([languageInterceptor])
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ), 
    provideAnimationsAsync(),
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
};
