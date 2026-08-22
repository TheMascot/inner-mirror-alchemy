import { Component } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly author = siteConfig.author;
  readonly siteName = siteConfig.name;
  readonly currentYear = new Date().getFullYear();
}
