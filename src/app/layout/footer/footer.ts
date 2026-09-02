import { Component } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly author = siteConfig.author;
  readonly siteName = siteConfig.name;
  readonly currentYear = new Date().getFullYear();
    protected readonly navigation = navigation;
}
