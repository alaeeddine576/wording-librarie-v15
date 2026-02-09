import { Component, inject, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  private wordingService = inject(WordingService);

  ngOnInit() {
    this.wordingService.initWording();
  }

  changeLanguage(lang: string) {
    this.wordingService.switchLanguage(lang);
  }
}
