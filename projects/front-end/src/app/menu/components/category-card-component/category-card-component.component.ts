import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { Dish } from '../../types/dish.model';

@Component({
  selector: 'tgam-category-card-component',
  standalone: true,
  imports: [
    NgFor, 
    TranslateModule, 
    MenuItemComponent // Il faut importer le composant enfant ici
  ],
  templateUrl: './category-card-component.component.html',
  styleUrl: './category-card-component.component.css'
})
export class CategoryCardComponent {
  
  @Input() title: string = ''; 
  
  @Input() dishes: Dish[] = []; 

  @Output() openImage = new EventEmitter<string>();

  /**
   * Lorsque tgam-menu-item émet un événement, 
   * on le capture et on le ré-émet vers le parent (la page).
   */
  onOpenImage(url: string) {
    this.openImage.emit(url);
  }
}
