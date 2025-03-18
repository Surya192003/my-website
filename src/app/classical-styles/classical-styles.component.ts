import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-classical-styles',
  templateUrl: './classical-styles.component.html',
  styleUrls: ['./classical-styles.component.css']
})
export class ClassicalStylesComponent {
  instructors = [
    {
      name: 'Chethanaa',
      dob: new Date(2003, 3, 29), // Feb 21, 2003
      styles: ['Kuchipudi'],
      achievements: ['Certified in Kuchipudi'],
      instagram: 'https://www.instagram.com/_chethanaa_0429?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      photo: '/assets/Chet.png'
    }
  ];

  calculateAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}