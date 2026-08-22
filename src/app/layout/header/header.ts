import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly siteName = siteConfig.name;
  readonly nav = siteConfig.nav;
  readonly headerCta = siteConfig.headerCta;

  protected isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
