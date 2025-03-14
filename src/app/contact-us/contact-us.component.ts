import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendWhatsAppMessage() {
    const phoneNumber = '+919866764077'; // Replace with your phone number
    const message = `Hello, my name is ${this.formData.name}. My email is ${this.formData.email}. Here's my message: ${this.formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }
}