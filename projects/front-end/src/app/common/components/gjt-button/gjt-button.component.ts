import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tgam-gjt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gjt-button.component.html',
  styleUrl: './gjt-button.component.css'
})


export class GjtButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() size: string = 's';
}
