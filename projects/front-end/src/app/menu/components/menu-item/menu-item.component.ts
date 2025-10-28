import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import "../../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { MenuItemType } from '../../types/menu-type';

@Component({
  selector: 'tgam-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  // @Input() data: MenuItemType = {
  //   text: '',
  //   name: '',
  //   image: '',
  //   isImgPositionRight: false,
  //   price: ''
  // };
  @Input() dishName = '';
  @Input() description = '';
  @Input() price = 0;
  @Input() image = '';
  @Output() openImage = new EventEmitter<string>();

  onImageClick(url: string) {
    this.openImage.emit(url);
  }


  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.el.nativeElement.querySelector('.fade-in').classList.add('show');
              console.log(this.el.nativeElement)
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(this.el.nativeElement.querySelector('.fade-in'));
    }
  }

}
