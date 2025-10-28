import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GjtButtonComponent } from '../gjt-button/gjt-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'tgam-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  imports: [CommonModule, RouterLink, GjtButtonComponent, MatMenuModule, TranslateModule, NgIf]
})
export class MainMenuComponent {
  constructor(private translate: TranslateService, public responsive: ResponsiveService) {
    const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang') )? localStorage.getItem('lang') ?? 'fr' : 'fr';

    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);

    this.selectedItem = savedLang.toUpperCase();
  }

  menuItems: string[] = ['FR', 'EN', 'DE'];
  
  selectedItem: string = 'FR'; 

  onSelect(item: string) {
    this.selectedItem = item;
    const lang = item.toLowerCase();
    this.translate.use(lang); 
    localStorage.setItem('lang', lang); 
    window.location.reload();
  }
}
