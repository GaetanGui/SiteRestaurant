import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface HomeItemData {
  imageUrl: string;
  titleKey: string;
  subtitleKey?: string; // Le sous-titre est optionnel
  textKey: string;
  textKey2?: string;
  buttonKey?: string;   // Bouton optionnel
  buttonLink?: string;  // Lien du bouton
}

@Component({
  selector: 'tgam-home-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, NgIf],
  templateUrl: './home-item.component.html',
  styleUrl: './home-item.component.css'
})

export class HomeItemComponent {
  @Input() cardData!: HomeItemData
}
