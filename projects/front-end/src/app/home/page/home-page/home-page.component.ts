import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GjtButtonComponent } from '../../../common/components/gjt-button/gjt-button.component';
import { RouterLink } from '@angular/router';
import { ResponsiveService } from '../../../common/services/responsive.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { HomeItemComponent, HomeItemData } from '../../components/home-item/home-item.component';

@Component({
  selector: 'tgam-home-page',
  standalone: true,
  imports: [
    TranslateModule,
    GjtButtonComponent,
    RouterLink,
    NgIf,
    AsyncPipe,
    HomeItemComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(public responsive: ResponsiveService) {
  }

  item1: HomeItemData = {
    imageUrl: "/assets/images/barTerrasse.jpg",
    subtitleKey: "home.features.terrasse.subtitle",
    titleKey: "home.features.terrasse.title",
    textKey: "home.features.terrasse.text",
    textKey2: "home.features.terrasse.text2"
  }
 
}
