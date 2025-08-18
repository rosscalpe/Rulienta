import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;
  private currentLanguage?: string;

  constructor(
    private translationService: TranslationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.subscription = this.translationService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(key: string): string {
    if (!key) return '';

    return this.translationService.translate(key);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
