import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GjtButtonComponent } from '../../../common/components/gjt-button/gjt-button.component';

@Component({
  selector: 'tgam-home-page',
  standalone: true,
  imports: [
    TranslateModule,
    GjtButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
