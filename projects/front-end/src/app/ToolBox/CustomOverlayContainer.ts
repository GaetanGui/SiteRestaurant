import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomOverlayContainer extends OverlayContainer {
  override _createContainer(): void {
    const container = document.createElement('div');
    container.classList.add('cdk-overlay-container');

    document.querySelector('app-root')?.appendChild(container);
    this._containerElement = container;
  }
}