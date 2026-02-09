import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WordingService, TranslatePipe } from 'wording-lib';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppComponent,
        TranslatePipe
      ],
      providers: [WordingService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Removed obsolete tests that checked for non-existent properties (title) 
  // and HTML elements (.content span) typical of default Angular templates but not present here.
});
