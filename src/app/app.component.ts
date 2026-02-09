import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important en v15
import { TranslatePipe } from './shared/pipes/translate.pipe';
import { WordingService } from './core/services/wording.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './app.component.html', // Vérifie le nom du fichier
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private wordingService = inject(WordingService);

  changeLanguage(lang: string) {
    this.wordingService.switchLanguage(lang);
  }
}
