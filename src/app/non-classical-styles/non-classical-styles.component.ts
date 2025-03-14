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
      dob: new Date(2003, 1, 21), // Feb 21, 2003
      styles: ['Hip Hop', 'Contemporary', 'Western', 'Mass'],
      achievements: ['Winner of SRM Dance Competetion', 'Founder of Hinter X Crew'],
      instagram: 'https://www.instagram.com/prudhvirajupenumatsa',
      photo: '/assets/Prudvi_photo.jpeg'
    },
    {
      name: 'Jane Smith',
      dob: new Date(2003, 0, 19), // Jan 19, 2003
      styles: ['Western', 'Mass'],
      achievements: ['Member of Hunter X Crew'],
      instagram: 'https://instagram.com/',
      photo: '/assets/Pranav.JPG'
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
