import { Component } from '@angular/core';
import { siteConfig } from '../../../core/config/site.config';

@Component({
  selector: 'app-facebook-cta',
  templateUrl: './facebook-cta.html',
  styleUrl: './facebook-cta.css',
})
export class FacebookCta {
  readonly facebookUrl = siteConfig.facebookGroupUrl;
}
