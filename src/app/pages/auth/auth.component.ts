import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private readonly secretCode: string = '134679';
  private userInput: string = '';
  currentImage: string = 'cranio.avif';
  alternateImage: string = 'michele.png';

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (/^[0-9]$/.test(event.key)) {
      this.userInput += event.key;

      if (this.userInput.length > this.secretCode.length) {
        this.userInput = this.userInput.slice(-this.secretCode.length);
      }

      if (this.userInput === this.secretCode) {
        this.toggleImage();

        this.userInput = '';
      }
    }
  }

  private toggleImage() {
    this.currentImage =
      this.currentImage === 'cranio.avif' ? this.alternateImage : 'michele.png';
  }
}
