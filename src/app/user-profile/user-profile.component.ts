import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


interface User {
  name: string;
  email: string;
  country: string;
  mobile: string;
  tags: string;
  photoUrl: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any ={
    country: '',
    mobile: '',
    tags: '',
    photoUrl: "https://i.pinimg.com/564x/f5/00/fa/f500fa7b731f6b01f62967f584ff15d2.jpg" 
  };
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
   
    this.editMode = false;
  }

  cancelEdit() {
 
    this.editMode = false;
  }

  changePhoto() {
    
  }

  handlePhotoChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      
      this.user.photoUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
}
