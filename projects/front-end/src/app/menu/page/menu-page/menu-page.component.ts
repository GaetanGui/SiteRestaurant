import { Component, HostListener } from '@angular/core';
import { LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Dish } from '../../types/dish.model';
import { CategoryCardComponent } from '../../components/category-card-component/category-card-component.component';
import { NgPipesModule } from 'ngx-pipes';

interface GroupedCategory {
  name: string;
  dishes: Dish[];
}

@Component({
  selector: 'tgam-menu-page',
  standalone: true,
  imports: [CategoryCardComponent, NgFor, NgIf, TranslateModule, LowerCasePipe, NgPipesModule],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  selectedImage: string | null = null;

  dishes: Dish[] = [
  { key: 'menu.dishes.bruchetta', price: 8.5, image: 'assets/images/bruschetta.png', category: 'Entrées' },
  { key: 'menu.dishes.soupeOignon', price: 7.9, image: 'assets/images/soupe_oignon.jpg', category: 'Entrées' },
  { key: 'menu.dishes.saladeChevre', price: 9.5, image: 'assets/images/salade_chevre.png', category: 'Entrées' },
  { key: 'menu.dishes.carpaccio', price: 10.9, image: 'assets/images/carpaccio.jpg', category: 'Entrées' },
  { key: 'menu.dishes.terrineMaison', price: 8.9, image: 'assets/images/terrine.png', category: 'Entrées' },

  // 🍝 PLATS
  { key: 'menu.dishes.burger', price: 14.9, image: 'assets/images/burger.png', category: 'Plats' },
  { key: 'menu.dishes.pouletBasquaise', price: 16.5, image: 'assets/images/poulet_basquaise.jpg', category: 'Plats' },
  { key: 'menu.dishes.lasagnes', price: 15.2, image: 'assets/images/lasagnes.png', category: 'Plats' },
  { key: 'menu.dishes.saumonGrille', price: 17.8, image: 'assets/images/saumon_grille.jpg', category: 'Plats' },
  { key: 'menu.dishes.risottoChampignons', price: 16.9, image: 'assets/images/risotto.jpeg', category: 'Plats' },

  // 🍰 DESSERTS
  { key: 'menu.dishes.tiramisu', price: 6.9, image: 'assets/images/tiramisu.png', category: 'Desserts' },
  { key: 'menu.dishes.mousseChocolat', price: 6.5, image: 'assets/images/mousse_chocolat.jpeg', category: 'Desserts' },
  { key: 'menu.dishes.cremeBrulee', price: 6.9, image: 'assets/images/creme_brulee.jpg', category: 'Desserts' },
  { key: 'menu.dishes.tartePomme', price: 6.8, image: 'assets/images/tarte_pomme.jpg', category: 'Desserts' },
  { key: 'menu.dishes.fondantChocolat', price: 7.2, image: 'assets/images/fondant_chocolat.jpeg', category: 'Desserts' },

  // 🍷 BOISSONS  
  { key: 'menu.dishes.eauMinerale', price: 3.0, image: 'assets/images/eau.jpg', category: 'Boissons' },
  { key: 'menu.dishes.cocaCola', price: 3.5, image: 'assets/images/coca.jpg', category: 'Boissons' },
  { key: 'menu.dishes.vinRouge', price: 5.0, image: 'assets/images/vin_rouge.jpg', category: 'Boissons' },
  { key: 'menu.dishes.vinBlanc', price: 5.0, image: 'assets/images/vin_blanc.jpg', category: 'Boissons' },
  { key: 'menu.dishes.biérePression', price: 4.5, image: 'assets/images/biere.jpg', category: 'Boissons' },

  // 🍽️ MENUS
  { key: 'menu.dishes.menuClassique', price: 24.9, image: 'assets/images/menu_classique.png', category: 'Menus' },
  { key: 'menu.dishes.menuVegetarien', price: 23.5, image: 'assets/images/menu_vegetarien.png', category: 'Menus' },
  { key: 'menu.dishes.menuEnfant', price: 12.9, image: 'assets/images/menu_enfant.png', category: 'Menus' },
  { key: 'menu.dishes.menuGourmet', price: 29.9, image: 'assets/images/menu_gourmet.jpg', category: 'Menus' },
  { key: 'menu.dishes.menuDegustation', price: 34.9, image: 'assets/images/menu_degustation.jpg', category: 'Menus' }
  ];

  public groupedCategories: GroupedCategory[] = [];

  public availableCategories: string[] = [];

  private dishMenus: Dish[] = [];
  
  // --- MODIFICATIONS ---

  /** La catégorie (objet unique) actuellement affichée. */
  public activeCategory?: GroupedCategory; // Plus une liste, mais un objet

  /** Le nom de la catégorie sélectionnée (pour le style du bouton). */
  public selectedCategoryName?: string;

  ngOnInit() {
    this.groupDishes();
  }
  
  groupDishes() {
    // 1. Obtenir les noms uniques des catégories (SANS 'Tous')
    this.availableCategories = Array.from(new Set(this.dishes.map(d => d.category)));

    // 2. Créer la liste complète de toutes les catégories groupées
    this.groupedCategories = this.availableCategories.map(categoryName => {
      return {
        name: categoryName,
        dishes: this.dishes.filter(dish => dish.category === categoryName)
      };
    });

    // 3. Sélectionner la première catégorie par défaut (s'il y en a une)
    if (this.availableCategories.length > 0) {
      this.onSelectCategory(this.availableCategories[0]);
    }
  }
  onClearFilter() {
    this.selectedCategoryName = undefined;
    this.activeCategory = undefined; 
  }

  onSelectCategory(categoryName: string) {
    // Met à jour le nom pour le style du bouton
    this.selectedCategoryName = categoryName;

    // Trouve l'objet catégorie correspondant et le définit comme catégorie active
    this.activeCategory = this.groupedCategories.find(
      group => group.name === categoryName
    );
  }

  openImage(url: string) { this.selectedImage = url;}
  closeImage() { this.selectedImage = null; }
  
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeImage();
  }
}
