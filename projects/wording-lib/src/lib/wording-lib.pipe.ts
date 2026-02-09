import { Pipe, PipeTransform, inject } from '@angular/core';
import { WordingService } from './wording-lib.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false
})
export class TranslatePipe implements PipeTransform {
    private wordingService = inject(WordingService);

    transform(key: string): string {
        return this.wordingService.get(key);
    }
}
