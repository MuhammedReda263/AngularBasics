import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterseptors } from './interceptors/authInterseptor.service';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { languageReducer } from './store/language/language.reducer';
import { provideEffects } from '@ngrx/effects';
import { LanguageEffect } from './store/language/language.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterseptors])),
    provideStore({
      counter: counterReducer,
      language: languageReducer
    }),
    provideEffects([LanguageEffect])
  ]
};