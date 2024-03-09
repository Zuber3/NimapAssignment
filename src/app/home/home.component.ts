import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isPopupVisible: boolean = false;

  
  openPopup() {
    
    this.isPopupVisible = true;
  }
}
