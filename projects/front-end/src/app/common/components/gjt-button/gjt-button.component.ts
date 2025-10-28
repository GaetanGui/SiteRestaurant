import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonSize = 's' | 'm' | 'l';

@Component({
  selector: 'tgam-gjt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gjt-button.component.html',
  styleUrl: './gjt-button.component.css',
})

export class GjtButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() size: ButtonSize = 'm';
  @Input() icon: string = ''
  @Input() link?: string;
  @Input() routerPath?: string;

}
