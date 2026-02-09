import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WordingService {
    private http = inject(HttpClient);

    // Version Compatible Angular 15 (BehaviorSubject)
    public translations$ = new BehaviorSubject<any>({});
    public currentLang$ = new BehaviorSubject<string>('en');

    async initWording() {
        // Adapter l'URL selon où tu poses tes fichiers (ex: assets/i18n)
        const baseUrl = '/i18n';

        try {
            console.log('🔄 Init Wording (v15)...');
            const config = await firstValueFrom(this.http.get<any>(`${baseUrl}/config.json`));

            // On vérifie si on a déjà charger cette version
            const currentLang = this.currentLang$.value;
            const cacheKey = `wording_data_${currentLang}_v${config.version}`;
            const storedData = localStorage.getItem(cacheKey);

            if (storedData) {
                console.log('⚡ Cache Hit');
                this.translations$.next(JSON.parse(storedData));
                return;
            }

            console.log('⬇️ Téléchargement request config from:', `${baseUrl}/config.json`);
            await this.loadTranslationFromServer(config.version, baseUrl);

        } catch (error) {
            console.error("Erreur Wording:", error);
        }
    }

    private async loadTranslationFromServer(version: string, baseUrl: string) {
        const lang = this.currentLang$.value;
        const url = `${baseUrl}/${lang}.v${version}.json`;
        console.log('Trying to load translation from:', url);

        try {
            const data = await firstValueFrom(this.http.get<any>(url));
            console.log('Translation data loaded:', data);
            this.translations$.next(data); // Mise à jour des vues

            // Cache
            localStorage.setItem(`wording_data_${lang}_v${version}`, JSON.stringify(data));
        } catch (err) {
            console.error('Error loading translation file:', err);
        }
    }

    async switchLanguage(lang: string) {
        this.currentLang$.next(lang);
        await this.initWording();
    }

    get(key: string): string {
        const keys = key.split('.');
        let result = this.translations$.value; // .value au lieu de ()

        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                return key;
            }
        }
        return result;
    }
}
