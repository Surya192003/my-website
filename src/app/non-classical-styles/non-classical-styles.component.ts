import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-non-classical-styles',
  templateUrl: './non-classical-styles.component.html',
  styleUrls: ['./non-classical-styles.component.css']
})
export class NonClassicalStylesComponent {
  instructors = [
    {
      name: 'John Doe',
      dob: new Date(1990, 5, 15), // June 15, 1990
      styles: ['Hip Hop', 'Contemporary'],
      instagram: 'https://instagram.com/johndoe',
      photo: 'assets/images/john-doe.jpg' // Replace with actual image path
    },
    {
      name: 'Jane Smith',
      dob: new Date(1995, 2, 22), // March 22, 1995
      styles: ['Western', 'Mass'],
      instagram: 'https://instagram.com/janesmith',
      photo: 'assets/images/jane-smith.jpg' // Replace with actual image path
    }
  ];

  constructor(private location: Location) {}

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

  goBack() {
    this.location.back();
  }
}
