// footer.component.ts
import { Component } from '@angular/core';
import { 
  faFacebookF, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import path

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope; // Use directly from free-solid-svg-icons
}
