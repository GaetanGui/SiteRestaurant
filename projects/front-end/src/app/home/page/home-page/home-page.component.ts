import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GjtButtonComponent } from '../../../common/components/gjt-button/gjt-button.component';
import { RouterLink } from '@angular/router';
import { ResponsiveService } from '../../../common/services/responsive.service';

@Component({
  selector: 'tgam-home-page',
  standalone: true,
  imports: [
    TranslateModule,
    GjtButtonComponent,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(public responsive: ResponsiveService) {
  }
}
