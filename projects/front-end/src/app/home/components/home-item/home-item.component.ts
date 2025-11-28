import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeFeature } from '../../types/homeFeature.model';

@Component({
  selector: 'tgam-home-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, NgIf],
  templateUrl: './home-item.component.html',
  styleUrl: './home-item.component.css'
})

export class HomeItemComponent {
  @Input() cardData!: HomeFeature
}
