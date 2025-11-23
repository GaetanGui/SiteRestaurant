import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { Dish } from '../../types/dish.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tgam-menu-detail-page',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    MenuItemComponent // Seule dépendance visuelle
  ],
  templateUrl: './menu-detail-page.component.html',
  styleUrl: './menu-detail-page.component.css'
})
export class MenuDetailPageComponent implements OnInit {
// La clé du menu (ex: 'menu.dishes.menuClassique')
  public menuKey: string = ''; 

  // Les listes de plats à afficher
  choixEntrees: Dish[] = [];
  choixPlats: Dish[] = [];
  choixDesserts: Dish[] = [];

  // Données "mock" (tu devrais les mettre dans un service !)
  // private allDishes: Dish[] = [
  //   { key: 'menu.dishes.bruchetta', price: 8.5, image: 'assets/images/bruschetta.png', category: 'Entrées' },
  //   { key: 'menu.dishes.soupeOignon', price: 7.9, image: 'assets/images/soupe_oignon.jpg', category: 'Entrées' },
  //   { key: 'menu.dishes.burger', price: 14.9, image: 'assets/images/burger.png', category: 'Plats' },
  //   { key: 'menu.dishes.pouletBasquaise', price: 16.5, image: 'assets/images/poulet_basquaise.jpg', category: 'Plats' },
  //   { key: 'menu.dishes.tiramisu', price: 6.9, image: 'assets/images/tiramisu.png', category: 'Desserts' },
  //   { key: 'menu.dishes.mousseChocolat', price: 6.5, image: 'assets/images/mousse_chocolat.jpeg', category: 'Desserts' },
  //   // ... (tous tes autres plats)
  // ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // 1. Récupère la clé du menu depuis l'URL
    this.menuKey = this.route.snapshot.paramMap.get('id') || '';

    // 2. Charge les plats correspondants
    this.loadMenuChoices(this.menuKey);
  }

  loadMenuChoices(menuKey: string) {
    // Logique pour définir les choix (à adapter)
    // if (menuKey === 'menu.dishes.menuClassique') {
    //   this.choixEntrees = [
    //     this.findDishByKey('menu.dishes.bruchetta'),
    //     this.findDishByKey('menu.dishes.soupeOignon')
    //   ];
    //   this.choixPlats = [
    //     this.findDishByKey('menu.dishes.burger'),
    //     this.findDishByKey('menu.dishes.pouletBasquaise')
    //   ];
    //   this.choixDesserts = [
    //     this.findDishByKey('menu.dishes.tiramisu'),
    //     this.findDishByKey('menu.dishes.mousseChocolat')
    //   ];
    // }
    // else if (menuKey === '...') { ... }

    // Nettoie les "undefined" si un plat n'est pas trouvé
    this.choixEntrees = this.choixEntrees.filter(Boolean);
    this.choixPlats = this.choixPlats.filter(Boolean);
    this.choixDesserts = this.choixDesserts.filter(Boolean);
  }

  // Helper pour trouver un plat
  // findDishByKey(key: string): Dish {
  //   return this.allDishes.find(dish => dish.key === key)!;
  // }

  // --- Logique pour l'overlay d'image ---
  selectedImage: string | null = null;
  openImage(url: string) { this.selectedImage = url; }
  closeImage() { this.selectedImage = null; }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeImage();
  }
}
