import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-classical-styles',
  templateUrl: './classical-styles.component.html',
  styleUrls: ['./classical-styles.component.css']
})
export class ClassicalStylesComponent {
  classicalStyles = ['Bharatanatyam', 'Kuchipudi'];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}