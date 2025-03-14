import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isTransparent = false;
  isHidden = false;
  private scrollTimeout: any;

  ngOnInit(): void {
  }
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
  @HostListener('window:scroll')
  onScroll(): void {
    // Show the header when the user scrolls
    this.isHidden = false;

    // Add transparency when scrolling down
    if (window.scrollY > 50) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }

    // Reset the inactivity timer
    this.resetInactivityTimer();
  }

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  onUserActivity(): void {
    // Reset the inactivity timer on user activity
    this.resetInactivityTimer();
  }

  private resetInactivityTimer(): void {
    // Clear the existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set a new timeout to hide the header after 2 seconds of inactivity
    this.scrollTimeout = setTimeout(() => {
      if (window.scrollY > 50) { // Only hide if the user has scrolled
        this.isHidden = true;
      }
    }, 2000); // 2 seconds
  }
}