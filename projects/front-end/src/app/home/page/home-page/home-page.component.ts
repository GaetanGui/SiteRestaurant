import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { GjtButtonComponent } from '../../../common/components/gjt-button/gjt-button.component';
import { RouterLink } from '@angular/router';
import { ResponsiveService } from '../../../common/services/responsive.service';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { HomeItemComponent } from '../../components/home-item/home-item.component';
import { HomeService } from '../../../services/home/home.service';
import { distinctUntilChanged, forkJoin, startWith, Subscription, switchMap } from 'rxjs';
import { HomeFeature } from '../../types/homeFeature.model';
import internal from 'stream';
import { OpeningHour } from '../../types/openingHours.model';
import { OpeningHoursService } from '../../../services/openingHours/opening-hours.service';

@Component({
  selector: 'tgam-home-page',
  standalone: true,
  imports: [
    TranslateModule,
    GjtButtonComponent,
    RouterLink,
    NgIf,
    NgFor,
    AsyncPipe,
    HomeItemComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(public responsive: ResponsiveService, private homeService: HomeService, private translate: TranslateService, private openingHourService: OpeningHoursService) {
  }
  
  private langChangeSubscription?: Subscription;
  
  public allFeatures: HomeFeature[] = [] 
  public allHours: OpeningHour[] = []; // Store hours here
  public serviceHours?: OpeningHour;
  
  ngOnInit() {

    this.translate.onLangChange.pipe( 
      startWith({ lang: this.translate.currentLang || 'fr', translations: null }),

      distinctUntilChanged((prev, curr) => prev.lang === curr.lang),

      switchMap(() => {
        console.log('Chargement des HomeFeatures...');
        return forkJoin({
          features: this.homeService.getHomeFeature(),
          hours: this.openingHourService.getOpeningHours() // Your API call
        }); 
      })
    ).subscribe({
      next: (data) => {
        this.allFeatures = data.features;
        this.allHours = data.hours.filter(h => h.day !== null && h.day !== '');

        this.serviceHours = data.hours.find(h => 
          (h.day === null || h.day === '') && 
          (h.status === null || h.status === '')
        );
        console.log('Données reçues !');
      },
      error: (err) => {
        if(err.status !== 0){
          console.error('Erreur API :', err)
        }
      }
    });
  }
}
