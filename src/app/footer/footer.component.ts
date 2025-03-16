import { Component } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Define icons
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;

  // Sanitized icons for use in templates
  facebookIcon: SafeHtml;
  instagramIcon: SafeHtml;
  whatsappIcon: SafeHtml;
  envelopeIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    // Construct and sanitize SVG icons
    this.facebookIcon = this.getSanitizedIcon(faFacebookF);
    this.instagramIcon = this.getSanitizedIcon(faInstagram);
    this.whatsappIcon = this.getSanitizedIcon(faWhatsapp);
    this.envelopeIcon = this.getSanitizedIcon(faEnvelope);
  }

  // Helper function to construct and sanitize SVG icon
  private getSanitizedIcon(icon: any): SafeHtml {
    const svg = `
      <svg aria-hidden="true" focusable="false" data-prefix="${icon.prefix}" 
           data-icon="${icon.iconName}" class="svg-inline--fa fa-${icon.iconName}" 
           role="img" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 ${icon.icon[0]} ${icon.icon[1]}">
        <path fill="currentColor" d="${icon.icon[4]}"></path>
      </svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}