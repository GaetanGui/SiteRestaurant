import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/**
 * Ce service utilise le BreakpointObserver du CDK pour exposer
 * des observables simples indiquant l'état actuel de l'écran.
 */
@Injectable({
  providedIn: 'root' // Service disponible dans toute l'application
})
export class ResponsiveService {

  /**
   * Un observable qui est `true` si l'écran correspond 
   * au breakpoint "Handset" (petit mobile).
   */
  public isMobile$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches), // On ne garde que la valeur true/false
      shareReplay(1) // On met en cache la dernière valeur pour les nouveaux abonnés
    );

  /**
   * Un observable qui est `true` si l'écran correspond 
   * au breakpoint "Tablet".
   */
  public isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  /**
   * Un observable qui est `true` si l'écran est "Web" (large).
   */
  public isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  /**
   * Un observable qui est `true` si l'écran est "Handset" OU "Tablet".
   */
  public isMobileOrTablet$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );


  /**
   * Vous pouvez aussi utiliser des media queries personnalisées.
   * Par exemple, tout ce qui est EN DESSOUS de 768px.
   */
  public isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 767.98px)')
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  // Le constructeur injecte le service du CDK
  constructor(private breakpointObserver: BreakpointObserver) {}

}