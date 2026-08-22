import {Component, HostListener, inject, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly showScrollTop = signal(false);
  private readonly router = inject(Router);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 220);
  }

  scrollToTop(): void {
   void this.router.navigate([], {
      fragment: undefined,
      replaceUrl: true,
      queryParamsHandling: 'preserve',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
